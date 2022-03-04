
FROM node:16-alpine3.14

# bash install
RUN apk add bash

WORKDIR /app

RUN mkdir -p /app/api

# Only copy the package.json file to work directory
COPY package.json /app
COPY /api/package.json /app/api
RUN npm install -g npm@7.20.1
RUN npm install

COPY . /app

# Docker Demon Port Mapping
EXPOSE 8081
EXPOSE 8080
