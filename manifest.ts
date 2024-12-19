import { Manifest } from "deno-slack-sdk/mod.ts";
import topic from "./workflows/topic.ts";

export default Manifest({
  name: "Slack GitHub Actions Commits",
  description: "Reading the latest pushes",
  icon: "assets/default_new_app_icon.png",
  workflows: [topic],
  botScopes: [
    "channels:manage",
    "groups:write.topic",
  ],
});
