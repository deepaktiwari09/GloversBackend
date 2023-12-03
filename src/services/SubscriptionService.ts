import Elysia, { t } from "elysia";
import { subscriptionFanPlan, subscriptionPlan } from "../db";
import {
  GetSubscriptionsByType,
  createNewSubscription,
  createSubscriptionDetails,
  deleteSubscription,
  deleteSubscriptionDetails,
} from "../storage/SubscriptionSlice";
import { Prisma } from "@prisma/client";
import { baseResponse, baseHeader, baseError } from ".";
import { uploadFile } from "../storage";
import dayjs from "dayjs";

const subscriberType = {
  coach: "coach",
  fan: "fan",
};

const api = new Elysia();

api.get(
  "/get-subscription-list/:type",
  async ({ params: { type }, set }) => {
    try {
      let data = await GetSubscriptionsByType(type);
      return new Response(baseResponse<typeof data>(data), baseHeader);
    } catch (error) {
      set.status = 400;
      set.headers = baseHeader.headers;
      return baseError<typeof error>(error);
    }
  },
  {
    beforeHandle: ({ set, params: { type } }) => {
      if (!subscriberType[type]) {
        set.status = 400;
        return {
          message: "type must be 'coach' or 'fan'",
        };
      }
    },
  }
);

api.post("/create-subscription", async ({ body, set }) => {
  try {
    let data = await createNewSubscription(body);
    return new Response(baseResponse<typeof data>(data), baseHeader);
  } catch (error) {
    set.status = 400;
    set.headers = baseHeader.headers;
    return baseError<typeof error>(error);
  }
});

api.post(
  "/create-subscription-details",
  async ({ body, set }) => {
    try {
      let base_path = `/subscriptions/${dayjs().format("YYYYMMDD_hh_mm_ss")}_${
        body.image_url.name
      }`;
      const buf = await body.image_url.arrayBuffer();
      let file_upload = await uploadFile(base_path, buf);
      let data = await createSubscriptionDetails({
        ...body,
        image_url: file_upload.path,
      });
      return new Response(baseResponse<typeof data>(data), baseHeader);
    } catch (error) {
      console.log(error);
      set.status = 400;
      set.headers = baseHeader.headers;
      return baseError<typeof error>(error);
    }
  },
  {
    body: t.Object({
      image_url: t.File({
        type: ["image"],
      }),
      subscriptionId: t.String(),
      title: t.String(),
      description: t.String(),
    }),
  }
);

api.delete("/delete-subscription-details", async ({ body, set }) => {
  try {
    let data = await deleteSubscriptionDetails(body);
    return new Response(baseResponse<typeof data>(data), baseHeader);
  } catch (error) {
    set.status = 400;
    set.headers = baseHeader.headers;
    return baseError<typeof error>(error);
  }
});

api.delete("/delete-subscription", async ({ body, set }) => {
  try {
    let data = await deleteSubscription(body);
    return new Response(baseResponse<typeof data>(data), baseHeader);
  } catch (error) {
    set.status = 400;
    set.headers = baseHeader.headers;
    return baseError<typeof error>(error);
  }
});

export { api as subscriptionService };
