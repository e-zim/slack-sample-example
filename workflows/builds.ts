import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const build = DefineWorkflow({
  callback_id: "build_outputs",
  title: "Build outputs",
  description: "Write details of the most recent build",
  input_parameters: {
    properties: {
      errors: {
        type: Schema.types.string,
      },
      runner: {
        type: Schema.types.string,
      },
      status: {
        type: Schema.types.string,
      },
      task: {
        type: Schema.types.string,
      },
    },
    required: [
      "errors",
      "runner",
      "status",
      "task",
    ],
  },
});

build.addStep(Schema.slack.functions.SendMessage, {
  channel_id: "C04CRUE6MU3",
  message: [{
    type: "rich_text",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: `${build.inputs.task}: `,
            style: {
              bold: true,
            },
          },
          {
            type: "text",
            text: `${build.inputs.status}`,
            style: {
              code: true,
            },
          },
        ],
      },
      {
        type: "rich_text_quote",
        elements: [
          {
            type: "text",
            text: `${build.inputs.errors} \n`,
          },
          {
            type: "emoji",
            name: "robot_face",
          },
          {
            type: "text",
            text: ` ${build.inputs.runner}`,
          },
        ],
      },
    ],
  }],
});

export default build;
