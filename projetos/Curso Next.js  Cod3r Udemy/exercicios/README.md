# Conceitos Básicos

### JSX

Criado pela equipe de desenvolvimento do React, o JSX é uma forma de criar elementos para serem utilizadas como templates de aplicações React. Basicamente, os elementos criados com o JSX são bem similares com código HTML e fornecem aos desenvolvedores uma forma mais simples e intuitiva de criar os componentes de uma aplicação.

Resumindo: Uma forma simplificada de usar HTML junto com o JS

Exemplo:
```js
export default function exempleJSX() {
    const arrayExemple = [
        <li>Clebim</li>,
        <li>Jão</li>,
        <li>Illidan</li>
    ];

    return (
        <ul>
            {arrayExemple}
        </ul>
    );
}
```

---

### Fragment

Não é possível retornar multiplos elementos "solto" sem que outro elemento os envolva, caso tente retornar multiplos elementos isso acarretara em erros de build por parte do React.

**Exemplo de componente incorreto:**
```js
export default function componenteIncorreto() {
    return (
        <h1> Exemplo Componente Incorreto </h1>
        <h1> Exemplo Componente Incorreto </h1>
    );
}
```

Isso ocorre por conta de que implementação do React depende da construção de uma estrutura tipo árvore que ele usa para reconciliação. Quando retornado diversos elementos no método de renderização a árvore não terá um nó raiz, assim dificultando o processamento do algoritmo de reconciliação.

**Doc do algoritimo:** https://reactjs.org/docs/reconciliation.html

A solução mais adotada pela comunidade é a de utilizar o fragment, este que até resolve um problema na construção de componentes Coluna para tabelas, uma vez que retornando o componente de coluna em uma ```<div>``` quando o componente fosse colocado em uma tabela, esta ficaria incorreta.

**Exemplo do componente Coluna:**
```js
export function Coluna() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
}
```

**Quando utilizado em uma tabela:**

```js
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Utilizando a tag fragment ```<></>``` o componente Coluna não teria uma ```<div>``` e assim ficaria correto na tabela.

---

### JS Modules

Com js modules podemos componentizar nosso front-end e assim ter uma ótima reutilização de código. O NodeJs possui o [require](https://nodejs.org/en/knowledge/getting-started/what-is-require/) que é o seu sistema de modularização, porém não estamos utilizando as funcionalidades do Node e sim o JS Vanilla onde para utilizarmos sua modularização utilizamos o ```export default function``` não sendo explicitamente necessário utilizar o default, visto que o default apenas denota que aquela função ou variável é a padrão daquele determinado arquivo.

**Exemplo de variável/função sendo exportada:**
```jsx
export default function Title() {
    return(
        <h1>
            Olá mundo!🌄
        </h1>
    );
}
```

Você pode exportar funções, var, let, const, e até classes. Eles precisam ser itens de nível superior; você não pode usar a exportação dentro de uma função.

**Importando o recurso criado:**
```jsx
import Title from "../../components/Title"

export default function usingModule() {
    return <Title/>
}
```
**Doc MDN sobre:** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

---

### Props

Não é muito interessante criar um componente Title que retorna um conteúdo estático, poderíamos passar o valor dinamicamente ao componente para que ele renderiza-se o que foi passado, conseguimos fazer isso com "Props" que é o nome dado no mundo React para esse conceito de passar propriedades para o componente.

Exemplo de componente que recebe propriedades:
```jsx
export default function TitleWithProps(props) {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <p>{props.subTitle}</p>
        </>
    );
}
```

Passando props para o componente:
```jsx
import TitleWithProps from "../../components/TitleWithProps";

export default function Props() {
    return (
        <TitleWithProps title="Olá mundo" subTitle="Learning ReactJS basics" />
    )
}
```

**E lembrando que Props são apenas leitura!** As funções que recebem props devem ser [puras](https://dev.to/silvaemerson/funcoes-puras-3mg).

Doc Oficial do React sobre: https://pt-br.reactjs.org/docs/components-and-props.html#gatsby-focus-wrapper

---

### CSS

A estilização no React é bem simples basta criar o componente e adicionar o nome das classes criados no arquivo css, como no exemplo abaixo:

Componente:
```jsx
import "./integration01.css"

export default function integration01() {
    return (
        <>
            <div className="red">Vermelho</div>
            <div className="blue">Aqua</div>
            <div className="purple">Purple</div>
        </>
    )
}
```
CSS:
```css
.red {
    color: red;
}

.blue {
    color: aqua;
}

.purple {
    color: purple;
}
```

Vimos que é possível chamar o arquivo css no escopo do componente, porém isso é possível somente no React, no **Next.js ELE NÃO PERMITE** e pede para que o css criado seja importado no arquivo **_app.jsx** onde o css estará disponível de forma global, isso é um problema pois precisamos que essa estilização esteja disponível somente no escopo do componente, o next resolve isso com **CSS Modules**.

---

## CSS Modules - Somente Next

O [CSS Modules](https://github.com/css-modules/css-modules) não é algo específico do Next, se trata de uma biblioteca para modularizar o CSS, tal lib que o Next já implementa por padrão.

A utilização é bem simples, basta seguir a convenção de nomenclatura ```[name].module.css``` como no exemplo abaixo:

Arquivo integration02.module.css:
```css
#integration02 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.blue {
    color: aqua;
}

.purple {
    color: purple;
}
```

Componente utilizando css:
```jsx
import styles from "./integration02.module.css";

export default function integration02() {
    return (
        <div id={styles.integration02}>
            <div className={styles.blue}>Aqua</div>
            <div className={styles.purple}>Purple</div>
        </div>
    )
}
```

Vemos que a utilização do CSS é um pouco diferente do convencional onde não importamos somente o arquivo CSS e utilizamos os nomes das classes e etc. Aqui é necessário importar o arquivo como um objeto e utilizar suas propriedades.

---

## Renderizando lista de elementos

No React é possível renderizar uma lista de elementos criando uma lista de elementos JSX e retornando essa lista em uma função, um pegando uma lista de elementos e realizando um map nesses elementos e transformando em JSX, como no exemplo abaixo:

```jsx
export default function repetition01() {
    const listaAprovados = [
        "Clebér",
        "Sandrolax",
        "Gavriellix",
        "Osmar"
    ]

    return(
        <ul>
            {
                listaAprovados.map((element, i) => (
                    <li key={i}>{element}</li>
                ))
            }
        </ul>
    );
}
```

O mesmo tratamento podemos realizar com objetos:
```jsx
import listaProdutos from "../../data/listaProdutos";

export default function repetition02() {
    return (
        <div>
            <table style={{border: "1px solid #000" }}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos.map(produto => (
                        <tr key={produto.id}>
                            <td style={{border: "1px solid #000" }}>{produto.id}</td>
                            <td style={{border: "1px solid #000" }}>{produto.nome}</td>
                            <td style={{border: "1px solid #000" }}>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
```