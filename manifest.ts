import { Manifest } from "deno-slack-sdk/mod.ts";
import Announcements from "./workflows/announcements.ts";

export default Manifest({
  name: "Slack GitHub Actions Releaser",
  description: "Sharing the latest news in channel",
  icon: "assets/default_new_app_icon.png",
  workflows: [Announcements],
  botScopes: [
    "chat:write",
    "chat:write.public",
    "reactions:write",
  ],
});
