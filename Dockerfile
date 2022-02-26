
FROM node:16-alpine3.14

# bash install
RUN apk add bash

# Set the timezone in docker
RUN apk --no-cache add tzdata && \
        cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
        echo "Asia/Seoul" > /etc/timezone

WORKDIR /app

RUN mkdir -p /app/api

# Only copy the package.json file to work directory
COPY package.json /app
COPY /api/package.json /app/api
RUN npm install -g npm@7.20.1
RUN npm install

COPY . /app

# Docker Demon Port Mapping
EXPOSE $API_PORT
EXPOSE $WEB_PORT

CMD ["npm", "run", "test"]
CMD ["npm", "run", "lint"]
CMD ["npm", "run" "build"]
CMD ["sh","-c", "npm run serve:api & npm run serve:web"]