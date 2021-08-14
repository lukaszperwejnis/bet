FROM node:14

WORKDIR /app_root

COPY package.json yarn.lock lerna.json .eslintrc.json ./
COPY scripts scripts/
COPY packages packages/

RUN yarn install
RUN ./node_modules/.bin/lerna run build
