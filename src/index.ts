import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import services from "./services";

export const main = new Elysia();

main.use(services);

main
  .get("/", () => {
    return "Hello world";
  })
  .use(staticPlugin())
  .listen(3000);
