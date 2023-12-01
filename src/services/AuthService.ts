import Elysia from "elysia";

const authService = new Elysia({ prefix: "auth" });

authService.post("login", ({ body }) => {
  return {
    message: "under construction",
  };
});

export default authService;
