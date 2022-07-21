FROM node:latest

WORKDIR /usr/src/app

RUN npm install mysql2 --save

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]