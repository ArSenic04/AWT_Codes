FROM node:18

WORKDIR /user/src/app

COPY . /user/src/app/

COPY package.json .

RUN npm i
COPY . .

EXPOSE 3000

RUN node ./validate.js
# CMD [ "node","start"]