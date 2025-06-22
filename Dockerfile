FROM node:22-alpine

WORKDIR /app

COPY . . 

# Install backend dependencies
RUN cd packages/webapi && npm install

# Install web app dependencies
RUN pwd
RUN ls -la packages/webapp
RUN cat packages/webapp/package.json
RUN cd packages/webapp && npm install --include-dev

CMD ["sh", "-c", "cd packages/webapi && npm run start & cd packages/webapp && npm run dev"]

# backend runs on port 3001
EXPOSE 3001

# web app runs on port 5173
EXPOSE 5173 