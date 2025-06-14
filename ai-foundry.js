import dotenv from 'dotenv';
import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

dotenv.config();

const client = new ModelClient(
process.env.AZURE_INFERENCE_SDK_ENDPOINT ?? "https://space-mbw63637-eastus2.services.ai.azure.com/models", new AzureKeyCredential(process.env.AZURE_INFERENCE_SDK_KEY ?? "YOUR_KEY_HERE"));

var messages = [
  { role: "developer", content: "You are an helpful assistant" },
  { role: "user", content: "Give me three bad jokes to brighten up my day" },
];

var response = await client.path("chat/completions").post({
  body: {
    messages: messages,
    max_completion_tokens: 800,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "gpt-4.1",
  },
});

console.log(JSON.stringify(response.body.choices[0].message.content, null, 2));
