# @bet

#### Project for creating simple bets (currently only with Champions League games) build with lerna monorepo.

## Packages:

### 1) `@bet/server`
REST API server (typescript, express.js, mongodb, mongoose)
### 2) `@bet/structures`
package for shared structures in project (typescript)
### 3) `@bet/app`
client webapp (typescript, react, styled-components, redux, redux-saga)
### 4) `@bet/ui-components`
reusable components for client webapp (typescript, storybook, react, styled-components)

## First steps

1. `npm i -g lerna` - lerna must be installed globally
2. `yarn` - install all required dependencies by command (scripty needs to be installed before you ran the app)
3. `chmod -R +x scripts` - give access to your scripts files by command in root directory to be executable
4. `lerna run build` - build all packages by 
5. To run server you must have installed and started mongodb (https://docs.mongodb.com/manual/administration/install-community/)
6. `yarn start`- to start `@bet/server` (port: 3010) and `@bet/app` (port: 4200)
7. `yarn storybook` - to start storybook from `@bet/ui-components` (port: 9001) 

## Available workspace monorepo commands:

1. `lerna run build` - to build packages
2. `lerna run clean` - to remove `tsconfig.tsbuildinfo` and `dist` directory from packages
3. `lerna run lint` - to lint all packages
4. `lerna run test` - to test packages (under development)

## Future improvements:

1. Add babel `@bet/server` to change `module` from `commonjs` to `esnext`
2. Add tests for all packages


## Docker

1. To build image run `docker build . -f Dockerfile -t bet` or pull image directly from the docker hub  `docker pull lukaszperwejnis/bet`
2. To start image run `docker run -d lukaszperwejnis/bet`
