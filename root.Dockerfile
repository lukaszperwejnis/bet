FROM node:14

WORKDIR /app_root

COPY package.json yarn-lock.json lerna.json .eslintrc.json ./
COPY scripts scripts/
COPY packages packages/

RUN yarn install && \
    ./node_modules/.bin/lerna bootstrap && \
    lerna run build


#
#version: '2'
#
#tasks:
#  dev.build:
#    desc: Build base docker image for development
#    cmds:
#      - "docker build . -f docker/root.Dockerfile -t businesshub/chs-dev:{{.DOCKER_DEV_VERSION}} --no-cache"
#
#  dev.push:
#    desc: Pushed local dev docker to remote repository
#    cmds:
#      - "docker push businesshub/chs-dev:{{.DOCKER_DEV_VERSION}}"
#
#  dev.generate-version:
#    cmds:
#      - "NEW_VERSION=`date -u +\"%Y%m%d%H%M%S\"` && sed -i '' -E \"s/DOCKER_DEV_VERSION:.*/DOCKER_DEV_VERSION: ${NEW_VERSION}/\" Taskvars.yml"
#
#  dev.bump-version:
#    desc: Bumps version of docker image used by other dockers
#    cmds:
#      - sed -i '' -E "s/(FROM .+)\:[0-9]+/\1\:{{.DOCKER_DEV_VERSION}}/" Dockerfile
#      - sed -i '' -E "s/(FROM .+)\:[0-9]+/\1\:{{.DOCKER_DEV_VERSION}}/" .circleci/Dockerfile
#      - sed -i '' -E "s/(businesshub\/chs\-dev\:)[0-9]+/\1{{.DOCKER_DEV_VERSION}}/" .circleci/config.yml
#
#  build:
#    cmds:
#      - docker build . --no-cache -t chs-dev