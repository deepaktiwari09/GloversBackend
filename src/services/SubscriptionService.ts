import Elysia from "elysia";
import { app } from "..";
import { subscriptionFanPlan, subscriptionPlan } from "../db";

const subscriberType = {
  coach: "coach",
  fan: "fan",
};

const api = new Elysia();

api.get(
  "/get-subscription-list/:type",
  ({ params: { type }, set }) => {
    switch (type) {
      case "coach":
        set.status = 200;
        return new Response(
          JSON.stringify({
            data: subscriptionPlan,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      case "fan":
        set.status = 200;
        return new Response(
          JSON.stringify({
            data: subscriptionFanPlan,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );

      default:
        set.status = 400;
        return "type is missing";
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

export { api as subscriptionService };
