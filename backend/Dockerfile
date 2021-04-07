FROM node:14

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN npm install

EXPOSE 3100

CMD ["npm", "start"]
