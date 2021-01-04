FROM node:15.5-alpine3.10 as builder

WORKDIR /app

COPY package*.json .

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]