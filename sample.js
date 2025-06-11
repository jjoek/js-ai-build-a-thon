import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "meta/Llama-3.2-11B-Vision-Instruct";

export async function main() {
  // Read the image file as a base64 string
//   const imagePath = path.join(process.cwd(), "contoso_layout_sketch.jpg");
//   const imageBuffer = fs.readFileSync(imagePath);
//   const imageBase64 = imageBuffer.toString("base64");

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: [
            { type: "text", text: "What products and prices are shown in this image?" },
            {
              type: "image_url",
              image_url: {
                url: "https://github.com/Azure-Samples/JS-AI-Build-a-thon/blob/assets/jsai-buildathon-assets/contoso_layout_sketch.jpg?raw=true"
              }
            }
          ]
        }
      ],
      temperature: 1.0,
    //   max_tokens: 10000,
      top_p: 1.0,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  console.log(response.body.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

