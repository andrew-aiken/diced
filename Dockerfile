FROM node:20.9.0-alpine3.18
EXPOSE 8123
WORKDIR /home/node/

COPY package.json package-lock.json .
RUN npm install -y
COPY src/ .

USER node

CMD ["node","/home/node/app.js"]
