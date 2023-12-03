import Elysia from "elysia";
import { subscriptionService } from "./SubscriptionService";
import authService from "./AuthService";
import userService from "./UserService";
import { Prisma } from "@prisma/client";

const services = new Elysia({ prefix: "v1" });

services.use(subscriptionService);
services.use(authService);
services.use(userService);

export const baseHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function baseResponse<T>(data: T) {
  return JSON.stringify({
    status_code: 200,
    data,
    metadata: {
      timestamp: Date.now(),
    },
  });
}

export function baseError<T>(error: T) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner

    return JSON.stringify({
      error_code: error.meta,
      message: error.message,
      description: "Please check the input parameters and try again.",
      status_code: 400,
    });
  } else {
    return JSON.stringify({
      error_code: null,
      message: "Something went wronge",
      description: "Please check the input parameters and try again.",
      status_code: 400,
    });
  }
}

export default services;
