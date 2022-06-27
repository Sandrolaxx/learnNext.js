# Conceitos Básicos Next.js

## Estrutura das Pastas

Ao criar um projeto com o `yarn create next-app` temos o bootstrap inicial de um projeto básico, abaixo temos a estrutura de pastas do projeto:

```
.next
public
pages
>   api
>   _app.js
>   index.js
styles
>   global.css
>   Home.module.css
.eslintrc.json
.gitignore
next.config.js
package.json
README.md
```

- **.next**: Onde ficam os build's de produção e os arquivos gerados necessários para desenvolvimento.
- **public**: Onde ficam os arquivos estáticos públicos servidos pela aplicação.
- **pages**: Onde ficam as páginas que serão criadas com base nos componentes jsx/tsx criados nesse path, também o arquivo **_app.js** que é o componente principal injetado no arquivo index.html também é o único local possível de se adicionar css global.
- **styles**: Onde se encontra a folha de estilo global e normalmente onde ficam as folhas de estilo modularizadas.
- **.eslintrc.json**: Arquivo com as definições de lint, para executar a verificação de lint no projeto executar o comando `yarn lint`.
- **.gitignore**: Onde é definido os arquivos que serão excluídos dos commit's ao git.
- **next.config.js**: Arquivo com as configurações de Runtime, como por exemplo configurações das rotas da api e variáveis de ambiente.
- **package.json**: Arquivo com todas as dependências do projeto e shortcuts de inicialização de tarefas.
- **README.md**: Arquivo descrevendo o projeto e como iniciá-lo e etc.

---

## Rotas

Você pode criar uma rota apenas colocando o seu arquivo `jsx/tsx` na pasta `pages` diretório, com isso o next já lê o componente e já o disponibiliza em uma rota com seu mesmo nome:

Exemplo da disposição do diretório:
```
pages
>   rotas
>   >   index.jsx
```

Acessando `localhost:3000/rotas` o arquivo index.jsx será servido.

---

## Rotas Dinâmicas

Anteriormente vimos como podemos criar rotas estáticas, porém em alguns casos precisamos capturar, por exemplo, o id que está presente na rota para fazer algum processamento com esse id, para fazer isso basta envolver o nome da pasta/arquivo criado em pages com colchetes, exemplo:
```
pages
>   [id]
>   >   buscar.jsx
```

Acessando `localhost:3000/1234/buscar` o arquivo buscar.jsx será servido e teremos acesso a essa variavél utilizando [useRouter](https://nextjs.org/docs/api-reference/next/router) em nosso componente. Lembrando que podemos criar inumeras pastas/arquivos dinâmicos, até uma dentro da outra. 

Exemplo de arquivo com variável de rota dinâmica:
```jsx
import { useRouter } from "next/router";

export default function search() {
    const router = useRouter();

    return(
        <div className="default">
            Id do usuário consultado foi: {router.query.id}
        </div>
    )
}
```

Não necessáriamente precisamos criar as pastas/arquivos com colchetes para capturar os params da rota, outra forma seria da forma convencional com ```?name=Sandrolax&age=23```, também poderiamos capturar esse parametros com useRouter, por exemeplo:
```jsx
import { useRouter } from "next/router";

export default function params() {
    const router = useRouter();

    return(
        <div className="default">
            Usuário {router.query.name} com idade {router.query.age}
        </div>
    )
}
```