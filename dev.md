# Questions
- During I think step 4 or 3 where we were parsing the file (RAG) we split the pdf into chunks and tried to search through the pdf with the user's search prompt and only load the chunks that have this search terms, won't this kind of limit the AI knowledge since it doesn't have the other contexts


# Step 3
- Had to modify the base URL in order to have my deployed model use the deployed API url. Here used the window context instead

# step 4
Here I had to modify the chat ui to include the sources bit section


# Todo 
- [ ] remove the langchainjs requirement from the root package.json

## Base Repo issues
- The base repo is ignoring the packages directory and thus not tracking the packages directory changes
- The initial chat ui in step 4 doesn't correctly handle sources element section