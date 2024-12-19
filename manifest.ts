import { Manifest } from "deno-slack-sdk/mod.ts";
import builds from "./workflows/builds.ts";

export default Manifest({
  name: "Slack GitHub Actions Builder",
  description: "Sharing the latest builds in channel",
  icon: "assets/default_new_app_icon.png",
  workflows: [builds],
  botScopes: [
    "chat:write",
    "chat:write.public",
  ],
});
