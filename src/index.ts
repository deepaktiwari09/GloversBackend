import { Elysia, t } from "elysia";

import services from "./services";

export const main = new Elysia();

main.use(services);

main
  .get("/", () => {
    return "Hello world";
  })
  .listen(3000);
