import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const release = DefineWorkflow({
  callback_id: "release_announcement",
  title: "Release announcement",
  description: "Share excitement around the latest changes",
  input_parameters: {
    properties: {
      draft_channel: {
        type: Schema.slack.types.channel_id,
      },
      release_notes: {
        type: Schema.types.string,
      },
      release_repository: {
        type: Schema.types.string,
      },
      release_version: {
        type: Schema.types.string,
      },
    },
    required: [
      "draft_channel",
      "release_notes",
      "release_repository",
      "release_version",
    ],
  },
});

const draft = release.addStep(Schema.slack.functions.SendMessage, {
  channel_id: release.inputs.draft_channel,
  message:
    `A new release of <https://github.com/${release.inputs.release_repository}/releases/tag/${release.inputs.release_version}|${release.inputs.release_repository}@${release.inputs.release_version}> was tagged! :rocket:`,
  interactive_blocks: [{
    type: "actions",
    elements: [
      {
        type: "button",
        text: { type: "plain_text", text: "Share" },
        action_id: "share",
      },
    ],
  }],
});

const announcement = release.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: "Share the release notes",
    interactivity: draft.outputs.interactivity,
    submit_label: "Share",
    fields: {
      elements: [{
        name: "announcement_channel",
        title: "Select an announcements channel",
        type: Schema.slack.types.channel_id,
      }],
      required: ["announcement_channel"],
    },
  },
);

const post = release.addStep(Schema.slack.functions.SendMessage, {
  channel_id: announcement.outputs.fields.announcement_channel,
  message:
    `A new release of <https://github.com/${release.inputs.release_repository}/releases/tag/${release.inputs.release_version}|${release.inputs.release_repository}@${release.inputs.release_version}> was tagged! :rocket:
    \`\`\`${release.inputs.release_notes}\`\`\``,
});

release.addStep(Schema.slack.functions.AddReaction, {
  message_context: post.outputs.message_context,
  emoji: "tada",
});

export default release;
