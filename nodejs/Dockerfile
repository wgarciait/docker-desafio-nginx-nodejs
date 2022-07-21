FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install express --save && npm install mysql2 --save

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]