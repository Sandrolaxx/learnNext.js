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

---

## Navegando com Componente Link

Podemos utilizar o componente [link](https://nextjs.org/docs/api-reference/next/link) do próprio next para realizar uma navegação entre as rotas, similar ao que é realizado pela tag [\<a>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a) do html, onde passamos a rota de destino no atributo `href`, exemplo de utilização:
```jsx
import Link from "next/link";

export default function rotas() {
    return (
        <div className="default">
            Rotas index
            <ul>
                <li>
                    <Link href="/routes/params?name=Sandrolax&age=23">
                        Params
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}
```

---

## Navegando com Hook useRouter

Podemos navegar entre as rotas de maneira similar ao componente link utilizando o próprio useRouter, a vantagem aqui é que podemos fazer isso de maneira programática, realizando a navegação, por exemplo, em funções, exemplo:

```jsx
import { useRouter } from "next/router"

export default function navWithRouter() {
    const router = useRouter();

    function simpleNav(url) {
        router.push(url);
    }

    function paramsNav() {
        router.push({
            pathname: "/routes/params",
            query: {
                age: 23,
                name: "Sandrolax"
            }
        });
    }

    return (
        <div className="default">
            Rotas index
            <hr />
            <button onClick={paramsNav} >
                Params
            </button>
            <hr />
            <button onClick={() => simpleNav("/")} >
                Home
            </button>
        </div>
    )
}
```

---

## API

A [API Routes](https://nextjs.org/docs/api-routes/introduction) prove uma solução de API embarcada com o next, qualquer arquivo no diretório `page/api` é tratado com um endpoint e servido como o mesmo. Um exemplo de endpoint é o arquivo `pages/api/hello.js` que retorna um json e um status code 200:
```js
export default function sayHi(req, res) {
  res.status(200)
    .json({ word: "Hi!" });
}
```

Para que a API funcione corretamente é necessária uma função que receba dois parâmetros `req` e `res`, onde req(request) possui os dados da requesição que está sendo recebida, como headers, query params, http method, já o res(response) vão conter as informações de resposta da requisição.

Podemos ler todos os [valores](https://nodejs.org/api/http.html#class-httpincomingmessage) da request, muito utilizado para receber params no endpoint, exemplo:
```jsx
export default function sayHi(req, res) {
  res.status(200)
    .json({ metodo: req.method });
}
```

---

## API - Endpoint Dinâmico

Nossa rotas [Dinâmicas](https://nextjs.org/docs/api-routes/dynamic-api-routes) segue, a mesma lógica de nomes utilizados em `pages` por exemplo `pages/api/question/[id].js`:
```js
export default function question(req, res) {
    if (req.method === "GET") {
        const id = req.query.id;

        res.status(200).json({
            id,
            enunciado: "Qual sua cor favorita?",
            respostas: [
                "Purple", "Yellow", "Green", "Blue"
            ]
        });
    } else {
        res.status(405).send();
    }
}
```

**Podemos também** criar um slug para poder receber inúmeros parâmetros, para criá-lo basta seguir o seguinte padrão de nomenclatura no nome do arquivo `[...dados].js`, caso esse arquivo estivesse na pasta `pages/api/user/` poderíamos passar qualquer parâmetro após user, assim eliminando a necessidade de criar diversas pastas dinâmicas para cadas parâmetro que desejarmos receber. No exemplo anterior de slug caso não passemos ao menos um parâmetro a rota não seria encontrada, para termos parâmetros opcionais, basta seguir a seguinte nomenclaturara `[[...dados]].js` adicionando esse colchete a mais agora nossa rota pode receber ou não parâmetros, evitando o status code 404 na rota.

---

## API - Consumindo Endpoint

Como temos um "back-end" disponível em nossa aplicação, podemos criar um componente jsx/tsx e realizar uma chamada para nossa API e consumir os dados servidos por ela, exemplo:

Componente consumindo o endpoint `/pages/api/question/[id].js`:
```jsx
import { useEffect, useState } from "react"

export default function question() {
    const [response, setResponse] = useState(null);
    const url = "http://localhost:3000/api/question/47"

    useEffect(() => fetchQuestion, []);

    function fetchQuestion() {
        fetch(url)
            .then(res => res.json())
            .then(json => setResponse(json));
    }

    return (
        <div className="default">
            <h1>Questões</h1>
            {response ?
                <>
                    <h4>Questão {response.id}</h4>
                    <p>{response.enunciado}</p>
                    <ul>
                        {response.respostas.map(res => (
                            <li key={res}>{res}</li>
                        ))}
                    </ul>
                </>
                :
                <h4>Não foi possível carregar as questões!😢</h4>
            }
        </div>
    )
}
```

---

# Conceitos avançados - Estratégias de Renderização

## Client Side Rendering - CSR ou SPA

Uma aplicação de página única se refere a aplicações onde todo o conteúdo irá ser criado dinamicamente com JS do lado do cliente(browser), onde o client side realiza uma chamada para o servidor ele responde com o todo HTML e JS da aplicação, o HTML além do header e etc, em seu body possui apenas uma TAG root e o resto dos elementos será criado pelo JS que irá manipular a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) para fazer isso. Porém essa abordagem impacta muito no [SEO](https://www.tecmundo.com.br/blog/2770-o-que-e-seo-.htm). 

**Conteúdo sobre👉** https://coodesh.com/blog/dicionario/o-que-e-spa/

Exemplo do funcionamento de um SPA:
![SPA](https://user-images.githubusercontent.com/61207420/177042821-8bfe9dec-440f-4011-bf16-ea305519bfa4.png)

---

## Server Side Rendering - SSR

Diferentemente do SPA a cada requisição tido o conteúdo da página é gerado do lado do servidor e então disponibilizado ao cliente, a vantagem disso é por exemplo uma otimização no SEO.

![Funcionamento SSR](https://miro.medium.com/max/700/1*XHuB099rg_R8XzEV3WdCVw.png)

O fluxo que podemos verificar abaixo é:
- Foi realizada uma requisição buscando o conteúdo da página e o servidor retornou todo o conteúdo da página o HTML e CSS
- Então o Browser renderiza a página e baixa o JS.
- Browser executa o JS do React que "hidrata" a DOM, isso não chega a alterar os componentes da DOM gerados pelo servidor.
- As alterações que o React prove executando do lado do cliente são apenas de integibilidade, por exemplo: clicks handlers e outros eventos de interação.

---

## Server Side Generation - SSG

A geração estática de conteúdo do lado do servidor, como o nome já bem diz, se refere a conteúdos previamente gerados na compilação pelo Next.js que são disponibilizados a cada chamada pelo servidor, sempre os mesmos conteúdos, porém mesmo sendo um conteúdo estático é possível realizar chamadas esternas e etc. O Next.js nos possibilita determinar quanto tempo essa compilação deve ocorrer para assim gerar conteúdo novo, por exemplo: cada 24 horas, 1 hora ou 30 min.