import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";
import release from "../workflows/announcements.ts";

const releaser: Trigger<typeof release.definition> = {
  type: TriggerTypes.Webhook,
  name: "Releaser webhook",
  workflow: `#/workflows/${release.definition.callback_id}`,
  inputs: {
    draft_channel: {
      value: "{{data.draft_channel}}",
    },
    release_notes: {
      value: "{{data.release_notes}}",
    },
    release_repository: {
      value: "{{data.release_repository}}",
    },
    release_version: {
      value: "{{data.release_version}}",
    },
  },
};

export default releaser;
