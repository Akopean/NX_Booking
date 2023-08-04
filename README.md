## Tutrial Project Installation
https://dev.to/beeman/introduction-to-building-api-s-with-nestjs-and-nrwl-nx-1l2b

https://www.youtube.com/watch?v=3cYOFQzvK7Q

https://blog.nrwl.io/nx-now-supports-next-js-84ae3d0b2aed


## Run Command
nx serve api = run Api app

nx serve web = run Web app

nx dep-graph = show WorkSpace Graph

nx affected:apps =  The affected:apps looks at what you have changed and uses the project graph to figure out which apps are affected by this change.

nx affected:libs, and you should see auth printed out. This command works similarly, but instead of printing the affected apps, it prints the affected libs.

nx affected:test to retest only the projects affected by the change.


## Docker Command

docker compose up -d


## Prisma

prisma format => format schema.prisma

## Generation Command

nx generate @nrwl/js:library --name=feature-user --directory=api --compiler=swc --buildable --tags "scope:api"

nx g  @nrwl/nest:resource --project=api-feature-user --directory=lib --type="graphql-code-first" --crud --name user

Add generated hooks :  nx generate @nrwl/js:library --name=data-access-graphql --directory=web --compiler=swc --buildable --tags "scope:web"

Install GQL generator : npm i -D graphql-codegen @graphql-codegen/cli @graphql-codegen/near-operation-file-preset @graphql-codegen/typed-document-node @graphql-codegen/typescript-operations @graphql-codegen/typescript @graphql-codegen/typescript-graphql-request

