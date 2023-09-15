```sh
$ npx create-remix@latest

# add prettier
$ touch .prettierrc .prettierignore
$ npm install -D prettier eslint-config-prettier

# add tailwindcss
# enable tailwind and postcss in remix.config.js
$ npm install -D tailwindcss
$ npx tailwindcss init --ts
$ npm install -D autoprefixer postcss-import

# add clean command
$ npm install -D rimraf

# add playwright
$ npm init playwright@latest
$ npm install -D cross-env

# add prisma
$ npm install -D prisma
$ npx prisma init --datasource-provider sqlite


$ npx prisma migrate dev --name init
# This command did two things:
  # 1. It creates a new SQL migration file for this migration in the prisma/migrations directory.
  # 2. It runs the SQL migration file against the database.

$ npm install @prisma/client
# The @prisma/client npm package consists of two key parts:
  # The @prisma/client module itself, which only changes when you re-install the package
  # The .prisma/client folder, which is the default location for the unique Prisma Client generated from your schema

# Whenever you update your Prisma schema, you will have to update your database schema using either prisma migrate dev or prisma db push. 
# This will keep your database schema in sync with your Prisma schema. The commands will also regenerate Prisma Client.

$ prisma generate
# Whenever you make changes to your database that are reflected in the Prisma schema,
# you need to manually re-generate Prisma Client to update the generated code in the node_modules/.prisma/client directory:


$ npm install bcryptjs
$ npm install -D @types/bcryptjs

$ npm install -D ts-node @types/node
```