import Elysia from "elysia";
import { subscriptionService } from "./SubscriptionService";
import authService from "./AuthService";
import userService from "./UserService";

const services = new Elysia({ prefix: "v1" });

services.use(subscriptionService);
services.use(authService);
services.use(userService);

export default services;
