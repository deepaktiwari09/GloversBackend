import { ObjectId } from "bson";
import { prisma } from ".";
import {
  CreateSubscriptionDetailsRequest,
  CreateSubscriptionRequest,
  DeleteSubscriptionDetailsRequest,
} from "../models/SubscriptionModel";

export async function deleteSubscription(
  request: DeleteSubscriptionDetailsRequest
) {
  const deleteAllDetails = prisma.subscription_details.deleteMany({
    where: {
      subscriptionId: request.id,
    },
  });

  const deleteTheSubscription = prisma.subscriptions.deleteMany({
    where: {
      id: request.id,
    },
  });

  let data = await prisma.$transaction([
    deleteAllDetails,
    deleteTheSubscription,
  ]);

  return { message: `Record ID ${request.id} is deleted successfully` };
}

export async function deleteSubscriptionDetails(
  request: DeleteSubscriptionDetailsRequest
) {
  let data = await prisma.subscription_details.delete({
    where: {
      id: request.id,
    },
  });
  return data;
}

export async function createSubscriptionDetails(
  request: CreateSubscriptionDetailsRequest
) {
  const data = await prisma.subscriptions.update({
    where: {
      id: request.subscriptionId,
    },
    data: {
      subscription_details: {
        create: [
          {
            title: request.title,
            description: request.description,
            image_url: request.image_url,
          },
        ],
      },
    },
    include: {
      subscription_details: true,
    },
  });

  return data;
}

export async function createNewSubscription(
  request: CreateSubscriptionRequest
) {
  const data = await prisma.subscriptions.create({
    data: {
      code: request.code,
      title: request.title,
      duration: request.duration,
      price: request.price,
      type: request.type,
    },
  });
  return data;
}

export async function GetSubscriptions() {
  let data = await prisma.subscriptions.findMany({
    include: { subscription_details: true },
  });
  return data;
}

export async function GetSubscriptionsByType(type: string) {
  let data = await prisma.subscriptions.findMany({
    where: {
      type: type,
    },
    include: { subscription_details: true },
  });
  return data;
}
