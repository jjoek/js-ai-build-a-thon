# Questions
- During I think step 4 or 3 where we were parsing the file (RAG) we split the pdf into chunks and tried to search through the pdf with the user's search prompt and only load the chunks that have this search terms, won't this kind of limit the AI knowledge since it doesn't have the other contexts


# Step 3
- Had to modify the base URL in order to have my deployed model use the deployed API url. Here used the window context instead

# step 4
Here I had to modify the chat ui to include the sources bit section

# step 7: 
Switched to a different machine and don't want to install any dependencies on it, thus had to dockerize the given app


# Recap: 
- llama-4 models aren't supported in the free subscription plan resulted to using llama-3.3-70b-instruct (it is also a multi-modal like gpt 4)
- The available model roles for llama doesn't support `developer` role this broke the ai-foundry.js, had to change the role to system
- Creating deployment models directly from azure results in incorrect endpoints. Ends up using `.cognitive-services` instead of `.services.ai-azure...` which I only managed to get when using the vs-code `ai-foundry` extension model deploy. 
- I also noted that when using the llama-3.3-70B-instruct, the response took a while, not sure if this is just an issue with my internet or the model itself
- GPT-4.1 for ai foundry brought back the same response, I asked for three jokes and it kept giving me the same responses, scarecrow, skeleton can't remember the other one
- llama-3.3-70B-instruct on second query failed to get any response asked me `"Here are three bad jokes to put a smile on your face:\n\n1. Why"` like it doesn't understand why I need the three bad jokes :)
- Vs-code ai-foundry is a bit slow, mostly when querying azure, e.g. select the default project, creating a model etc

<!-- # Todo 
- [ ] remove the langchainjs requirement from the root package.json (Here basically remove the root package json, no longer used, switched to the packages) -->

## Base Repo issues
- The base repo is ignoring the packages directory and thus not tracking the packages directory changes
- The initial chat ui in step 4 doesn't correctly handle sources element section
- The agentservice.js has the wrong import `import { AIProjectsClient } from "@azure/ai-projects";` this should be `AIProjectClient`
- On step 7 - MCP the auto created node_os_mcp listens on port 3001 you need to update the .vscode/settings.json env to 300X not 3001 and the .aitk/mcp.json as well