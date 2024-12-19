import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const commits = DefineWorkflow({
  callback_id: "follow_recent_commits",
  title: "Follow recent commits",
  description: "Write details of the most recent build",
  input_parameters: {
    properties: {
      commit_message: {
        type: Schema.types.string,
      },
      commit_repository: {
        type: Schema.types.string,
      },
    },
    required: [
      "commit_message",
      "commit_repository",
    ],
  },
});

commits.addStep(Schema.slack.functions.UpdateChannelTopic, {
  channel_id: "C04CRUE6MU3",
  topic:
    `:large_green_square: ${commits.inputs.commit_repository}: ${commits.inputs.commit_message}`,
});

export default commits;
