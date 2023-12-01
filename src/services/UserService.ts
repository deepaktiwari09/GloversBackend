import Elysia from "elysia";

const userService = new Elysia({ prefix: "user" });

userService.post("profile", ({ body }) => {
  return {
    message: "under construction",
  };
});

export default userService;
