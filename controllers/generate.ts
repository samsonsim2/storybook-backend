"use node";

const { internalAction } = require("./_generated/server")
const { Replicate } =require("langchain/llms/replicate")

export const generate = internalAction(
  async (
    { runMutation },
    {
      prompt,
      image,
      sketchId,
    }: { sketchId: string; prompt: string; image: string }
  ) => {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN!,
    });

    const output = (await replicate.run(
      "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
      {
        input: {
          image,
          scale: 7,
          prompt,
          image_resolution: "512",
          n_prompt:
            "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
        },
      }
    )) as [string, string];

    await runMutation("sketches:updateSketchResult", {
      sketchId,
      result: output[1],
    });
  }
);