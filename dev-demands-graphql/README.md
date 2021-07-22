# Projeto utilizado no curso de graphQL

### utilizado pnpm ao invés de npm, para instar:
```
sudo npm i -g pnpm
```

### a versao 2 do apollo tem que ser instalado, caso contrário nao roda com este projeto
```
pnpm i apollo-server-express@2.17.0  graphql --filter @dev-demands/server
```

### Instalar para o folder "dev-demands-graphql"

```
(para rodar em mode dev)

pnpm i -D nodemon --filter @dev-demands/server
(colocar em package.json em scripts: "dev": "nodemon -r esm .")

(para que nao seja necessario rodar o server a cada teste)
pnpm run dev --filter @dev-demands/server

(para fazer conexao com apollo graphql)
pnpm i apollo-link apollo-link-context apollo-link-error apollo-link-http --filter @dev-demands/web
pnpm i apollo-client graphql graphql-tag react-apollo --filter @dev-demands/web
pnpm i apollo-cache-inmemory --filter @dev-demands/web
(comando acima depende do cache que se utiliza no client)

Para rodar o client:
pnpm run start --filter @dev-demands/web

```
