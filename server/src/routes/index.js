import { index } from "../controllers/index";

export default async (server) => {
  server.get("/", index);
};