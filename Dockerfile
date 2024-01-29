FROM node:14-alpine
WORKDIR /docker-frontend
ARG PORT_BUILD=3000
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
ENTRYPOINT npm start