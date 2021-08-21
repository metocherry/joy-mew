# Joy Mew

## Monorepo

### Set yarn 2

```bash
yarn set version berry
```

And then, initialize the monorepo workspaces

```bash
yarn init -w
```

- .yarn/cache: this is your new node_modules folder. With the difference that each dependency is only downloaded once and saved in compressed state
- .pnp.js: the Plug’n’play file provides Node a complete map of your dependencies by listing their versions and locations in the repository
- yarn.lock: the checksum file contains the exact dependency versions installed

## References

- [Scaling out JavaScript Monorepos with Yarn Workspaces](https://semaphoreci.com/blog/javascript-monorepos-yarn-workspaces)
