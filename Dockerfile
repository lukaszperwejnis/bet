FROM node:14
WORKDIR /app_root
COPY package.json yarn.lock lerna.json .eslintrc.json ./
COPY scripts scripts/
COPY packages packages/
RUN yarn install

FROM node:14-slim
WORKDIR /app_root as build
COPY --from=0 /app_root/node_modules node_modules
COPY --from=0 /app_root/packages packages
COPY --from=0 /app_root/package.json /app_root/lerna.json ./
COPY --from=0 /app_root/scripts scripts
RUN ./node_modules/.bin/lerna run build
