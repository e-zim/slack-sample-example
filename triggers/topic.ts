import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";
import topic from "../workflows/topic.ts";

const builder: Trigger<typeof topic.definition> = {
  type: TriggerTypes.Webhook,
  name: "Status sharing",
  description: "Update a channel with commit details",
  workflow: `#/workflows/${topic.definition.callback_id}`,
  inputs: {
    commit_message: {
      value: "{{data.github_payload_head_commit_message}}",
    },
    commit_repository: {
      value: "{{data.github_payload_repository}}",
    },
  },
};

export default builder;
