FROM node:14

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
