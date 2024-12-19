import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";
import builds from "../workflows/builds.ts";

const builder: Trigger<typeof builds.definition> = {
  type: TriggerTypes.Webhook,
  name: "Status sharing",
  description: "Update a channel with build results",
  workflow: `#/workflows/${builds.definition.callback_id}`,
  inputs: {
    errors: {
      value: "{{data.errors}}",
    },
    runner: {
      value: "{{data.runner}}",
    },
    status: {
      value: "{{data.status}}",
    },
    task: {
      value: "{{data.task}}",
    },
  },
};

export default builder;
