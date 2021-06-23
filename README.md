#@bet

####Project for creating simple bets (currently only with Champions League games) build with lerna monorepo.

## Packages:
###1) `@bet/server`
REST API server (typescript, express.js, mongodb, mongoose)
###2) `@bet/structures` 
package for shared structures in project (typescript)
###3) `@bet/app`
client webapp (typescript, react, styled-components, redux, redux-saga)
###4) `@bet/ui-components` 
reusable components for client webapp (typescript, storybook, react, styled-components)

##First steps
1) You must have installed globally lerna `npm i -g lerna`
2) Install all required dependencies by command `yarn` (scripty needs to be installed before you ran the app)
3) Give access to your scripts files by command in root directory to be executable: `chmod -R +x scripts`
4) Build all packages by `lerna run build`
4) To start `@bet/server` (port: 3010) and `@bet/app` (port: 4200) use `yarn start`
5) To start storybook from `@bet/ui-components` (port: 9001)  use `yarn storybook`

##Available workspace monorepo commands:

1) `lerna build` - to build packages
2) `lerna clean` - to remove `tsconfig.tsbuildinfo` and `dist` directory from packages
3) `lerna lint` - to lint packages (under development)
4) `lerna test` - to test packages (under development)


##Future improvements:

1) Fix packages to apply `.eslintrc.json` rules
2) Add babel `@bet/server` to change `module` from `commonjs` to `esnext`
3) Add types definition for webpack build process in `@bet/ui-components`
4) Add tests for all packages
