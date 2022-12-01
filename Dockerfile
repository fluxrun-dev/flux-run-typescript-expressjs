FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn tsc

EXPOSE 32000
ENV PORT 32000

CMD ["yarn", "start"]
