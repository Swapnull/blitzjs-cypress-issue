[![Blitz.js](https://raw.githubusercontent.com/blitz-js/art/master/github-cover-photo.png)](https://blitzjs.com)

This is a [Blitz.js](https://github.com/blitz-js/blitz) app.

# **cypress-test**

This is a really basic example of a problem I am having with cypress + blitz.

Steps I have taken

- create project (blitz new cypress-test)
- generate blitz files (yarn dev)
- install cypress (yarn add -D cypress)
- generate cypress files (yarn cypress open)
- add cypress/tsconfig.json
- install dotenv-flow
- install tsconfig-paths
- update cypress/plugins/index.ts
- update cypress/support/commands.js
- update cypress/support/commands.js

Then I try to run `yarn cypress run` and I get the following error

```sh
The plugins file is missing or invalid.

Your `pluginsFile` is set to `/Users/martyn/Code/cypress-test/cypress/plugins/index.ts`, but either the file is missing, it contains a syntax error, or threw an error when required. The `pluginsFile` must be a `.js`, `.ts`, or `.coffee` file.

Or you might have renamed the extension of your `pluginsFile`. If that's the case, restart the test runner.

Please fix this, or set `pluginsFile` to `false` if a plugins file is not necessary for your project.

 Error: dlopen(/Users/martyn/Code/cypress-test/node_modules/sodium-native/prebuilds/darwin-x64/node.napi.node, 1): no suitable image found.  Did find:
        /Users/martyn/Code/cypress-test/node_modules/sodium-native/prebuilds/darwin-x64/node.napi.node: code signature in (/Users/martyn/Code/cypress-test/node_modules/sodium-native/prebuilds/darwin-x64/node.napi.node) not valid for use in process using Library Validation: mapped file has no cdhash, completely unsigned? Code has to be at least ad-hoc signed.
    at process.func [as dlopen] (electron/js2c/asar_bundle.js:5:1846)
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1138:18)
    at Object.func [as .node] (electron/js2c/asar_bundle.js:5:1846)
    at Module.load (internal/modules/cjs/loader.js:935:32)
    at Module._load (internal/modules/cjs/loader.js:776:14)
    at Function.f._load (electron/js2c/asar_bundle.js:5:12913)
    at Module.require (internal/modules/cjs/loader.js:959:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at load (/Users/martyn/Code/cypress-test/node_modules/node-gyp-build/index.js:21:10)
    at Object.<anonymous> (/Users/martyn/Code/cypress-test/node_modules/sodium-native/index.js:1:39)
    at Module._compile (internal/modules/cjs/loader.js:1078:30)
    at Module._extensions..js (internal/modules/cjs/loader.js:1108:10)
    at Object.require.extensions.<computed> [as .js] (/Users/martyn/Library/Caches/Cypress/8.3.0/Cypress.app/Contents/Resources/app/packages/server/node_modules/ts-node/src/index.ts:529:44)
    at Module.load (internal/modules/cjs/loader.js:935:32)
    at Module._load (internal/modules/cjs/loader.js:776:14)
    at Function.f._load (electron/js2c/asar_bundle.js:5:12913)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
