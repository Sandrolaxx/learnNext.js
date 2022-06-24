# Conceitos Básicos React⚛️

## JSX

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

## Fragment

Não é possível retornar multiplos elementos "solto" sem que outro elemento os envolva, caso tente retornar multiplos elementos isso acarretara em erros de build por parte do React.

Exemplo de componente incorreto:
```js
export default function componenteIncorreto() {
    return (
        <h1> Exemplo Componente Incorreto </h1>
        <h1> Exemplo Componente Incorreto </h1>
    );
}
```

Isso ocorre por conta de que implementação do React depende da construção de uma estrutura tipo árvore que ele usa para reconciliação. Quando retornado diversos elementos no método de renderização a árvore não terá um nó raiz, assim dificultando o processamento do algoritmo de reconciliação.

**Doc do ALGORITIMO DE RECONCILIAÇÃO👉** https://reactjs.org/docs/reconciliation.html

A solução mais adotada pela comunidade é a de utilizar o fragment, este que até resolve um problema na construção de componentes Coluna para tabelas, uma vez que retornando o componente de coluna em uma `<div>` quando o componente fosse colocado em uma tabela, esta ficaria incorreta.

Exemplo do componente Coluna:
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

Quando utilizado em uma tabela:

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

Utilizando a tag fragment `<></>` o componente Coluna não teria uma `<div>` e assim ficaria correto na tabela.

---

## JS Modules📂

Com js modules podemos componentizar nosso front-end e assim ter uma ótima reutilização de código. O NodeJs possui o [require](https://nodejs.org/en/knowledge/getting-started/what-is-require/) que é o seu sistema de modularização, porém não estamos utilizando as funcionalidades do Node e sim o JS Vanilla onde para utilizarmos sua modularização utilizamos o `export default function` não sendo explicitamente necessário utilizar o default, visto que o default apenas denota que aquela função ou variável é a padrão daquele determinado arquivo.

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

Importando o recurso criado:
```jsx
import Title from "../../components/Title"

export default function usingModule() {
    return <Title/>
}
```
**Doc MDN sobre👉** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

---

## Props

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

**Doc Oficial do React sobre👉**  https://pt-br.reactjs.org/docs/components-and-props.html#gatsby-focus-wrapper

---

## Elementos filhos👶

Podemos criar componentes que recebem outros componentes, estes que são seus filhos, acessando a propriedade **children** de props podemos acessar esses elementos que foram definidos no componente pai, como no exemplo abaixo:

```jsx
export default function List(props) {
    return (
        <div>
            <h2>Lista de elementos filhos:</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}
```

Utilizando componente List:
```jsx
import List from "../../components/List";

export default function childrenElements() {
    return (
        <List>
            <li>Elemento #01</li>
            <li>Elemento #02</li>
            <li>Elemento #03</li>
            <li>Elemento #04</li>
        </List>
    )
}
```

---

## CSS🦄

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

A utilização é bem simples, basta seguir a convenção de nomenclatura `[name].module.css` como no exemplo abaixo:

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

## Renderizando lista de elementos👯‍♀️

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
---

## Renderização condicional❌ ✅

A renderização condicional em React funciona da mesma forma que as condições em JavaScript. Podemos utilizar o operador `if` ou `operadores ternários` para definir quais os elementos vão ser apresentados na tela, como nos exemplos abaixo:

```jsx
export default function OnlyEven(props) {
    if (props.number % 2 === 0) {
        return <h1>Número {props.number} é Par!</h1>
    } else {
        return null;
    }
}
```

Utilizando componente:
```jsx
import OnlyEven from "../../components/OnlyEven";

export default function conditional01() {
    return (
        <div>
            <OnlyEven number={12} />
            <OnlyEven number={11} />
        </div>
    );
}
```

Aqui somente números Par seriam renderizados em tela, teriamos o mesmo resultado com operadores ternários:

```jsx
export default function OnlyEven(props) {
    const isEvenNumber = props.number % 2 === 0;
    
    return isEvenNumber ? <h1>Número {props.number} é Par!</h1> : null;
}
```

Outra ideia é utilzar o recurso do props.children e criar um componente "If" que renderiza o componente filho de acordo com a condição passada, exemplo:
```jsx
export default function If(props) {
    if (props.condition === true) {
        return props.children;
    } else {
        return false;
    }
}
```

Utilizando o componente If
```jsx
import If from "../../components/If";

export default function conditional02() {
    const firstNumber = 4;
    const secondNumber = 5;
    
    return (
        <div>
            <If condition={firstNumber % 2 === 0} >
                <p>O número {firstNumber} é Par!</p>
            </If>
            <If condition={secondNumber % 2 === 1} >
                <p>O número {secondNumber} é Ímpar!</p>
            </If>
        </div>
    );
}
```

**Doc Oficial do React sobre👉** https://pt-br.reactjs.org/docs/conditional-rendering.html

---

## Chamada de Função em Evento🏌🏻

Podemos chamar funções em qualquer um dos [eventos do browser](https://developer.mozilla.org/pt-BR/docs/Web/Events) isso é muito útil para pegar informações de Input's ou realizar uma ação ao clicar em um botão.

Exemplo de chamada de função em evento:
```jsx
export default function handleFunctions() {
    function getInputProps(event) {
        console.log("Valor do Input:".concat(event.target.value));
    }

    function handleLogClick() {
        console.log("Fui clicado🤯!");
    }
    
    return (
        <div>
            <button onClick={handleLogClick} >Clique aqui!</button>
            <button onClick={() => console.log("Works like")} >Arrow Function</button>
            <div>
                <span>Input</span>
                <input onChange={getInputProps} />
            </div>
        </div>
    );
}
```
---

## Alterando estado dos componentes🧘‍♂️

Utilizamos o "state" de um componenete para armazenar dados que, quando alterados, **devem causar uma nova renderização**, por exemplo:

```jsx
export default function states() {
    const xAxis = 0;
    const yAxis = 0;

    function handleChangeAxis(event) {
        xAxis = event.pageX;
        yAxis = event.pageY;
    }

    return (
        <div style={style} onMouseMove={e => handleChangeAxis(e)} >
            <h1>Eixo X: {xAxis}</h1>
            <h1>Eixo Y: {yAxis}</h1>
        </div>
    )
}
```
Esse nosso exemplo acima, diferentemente do JS Vanilla, **não iriá ser alterado nenhum valor em tela**, pois os componentes do React possuem um [ciclo de vida](https://pt-br.reactjs.org/docs/state-and-lifecycle.html) que após criados podemos definir alguns estados dentro deles, no exemplo abaixo o usuário ao realizar o evento de mover o mouse e o elemento com o estado é renderizado novamente e assim atualizando o valor na tela.

Componente com estados:
```jsx
import { useState } from "react"

export default function states() {
    const [xAxis, setXaxis] = useState(0);
    const [yAxis, setYaxis] = useState(0);

    function handleChangeAxis(event) {
        setXaxis(event.pageX);
        setYaxis(event.pageY);
    }

    return (
        <div style={style} onMouseMove={e => handleChangeAxis(e)} >
            <h1>Eixo X: {xAxis}</h1>
            <h1>Eixo Y: {yAxis}</h1>
        </div>
    )
}
```

No exemplo acima usamos o hook `useState` para manipularmos o estado de das nossas variáveis exibidas em tela, abordaremos `hooks's` em "Conceitos avançados". **LEMBRANDO** que nem toda informação visual que muda deve ficar no estado, o estado deve conter o mínimo necessário para conseguirmos derivar o estado visual do componente, o tamanho do state dos componentes React afeta diretamente o desempenho do **ALGORITIMO DE RECONCILIAÇÃO**, por isso é importante minimizar o tamanho do state.

---

# Conceitos avançados

## Comunicação - Direta➡️

Vimos anteriormente que podemos passar propriedades do componente Pai para os componentes Filhos é muito simples, basta passar props entre eles, como no exemplo a seguir:

Componente filho:
```jsx
export default function Son(props) {
    return (
        <div>
            <p>{props.name} - {props.family}</p>
        </div>
    )
}
```

Componente pai:
```jsx
import Son from "./Son";

export default function Father(props) {
    return (
        <div>
            <Son name="Sandrolax" family={props.family} />
            <Son name="João" family={props.family} />
            <Son {...props} name="Nathália" />
        </div>
    )
}
```

```jsx
import Father from "../../components/direct/Father";

export default function direct() {
    return (
        <div>
            <h1>Direta</h1>
            <Father family="Ramos" name="default" />
        </div>
    )
}
```

**VALE ATENTAR QUE** o uso de [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) é necessário respeitar a ordem de definição das variáveis, onde se o `{...props}` for utilizado após definições diretas de propriedades ele as sobrescreveria, por exemplo:

```jsx
    <Son name="Nathália" {...props} />
```

Se quem tivesse instanciado o componente tivesse definido um nome a propriedade definida no próprio componente seria sobrescrita, sempre valendo a última definição, ou seja, para evitar esse tipo de situação sempre usar a Spread syntax no começo da definição de propriedades do componente.

---

## Comunicação Indireta🔄

Utilizada em cenários onde precisamos passar informações e realizar a comunicação do componente Filho para o componente Pai, o modo de fazer isso se da por funcões, onde o componente Pai define uma função e o componente Filho realiza a chamada dessa função e nela pode passar parametros ou não, exemplo:

Componente Filho:
```jsx
export default function Son(props) {
    
    function talkWithFather() {
        console.log("Vou falar com meu pai.🙏");

        props.talk("E ai pai suave?😎");
    }
    
    return (
        <div>
            <button onClick={talkWithFather}>Falar com Father</button>
        </div>
    )
}
```

Componente Pai:
```jsx
import Son from "./Son";

export default function Father() {
    
    function talking(sonResponse) {
        console.log("E ai filhão!");

        console.log(sonResponse);
    }
    
    return (
        <div>
            <Son talk={talking} />
        </div>
    )
}
```

Utilizando componente Father:
```jsx
import Father from "../../components/indirect01/Father";

export default function indirect01() {
    return (
        <div>
            <h1>Indireta</h1>
            <Father />
        </div>
    )
}
```

Log da chamada da função:
```
Vou falar com meu pai.🙏
E ai filhão!
E ai pai suave?😎
```

---

## Componentes Controlados e Não Controlados🧟

Quando for necessário trabalhar principalmente com formulários ou Input's será necessário vincular um estado para cada campo definido, visto que utilizando o React e definindo um estado ao [Componente Controlando](https://pt-br.reactjs.org/docs/forms.html#controlled-components) não
é possível que alteremos o valor sem alterar o estado do mesmo, como no exemplo abaixo:

Componente Controlado:
```jsx
import { useState } from "react";

export default function form() {
    const [value, setValue] = useState("Impossível Alterar o Valor do Input");

    return (
        <div className="default">
            <h1>Formulário</h1>
            <input type="text" value={value} />
        </div>
    );
}
```

Exemplo acima mesmo clicando no Input e tentando digitar novos valores o mesmo será alterado, por conta de ser um componente "Controlado" e que a alteração em tela se dá pela alteração do estado do componente que reflete então na atualização da tela, até retornado um Warning "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`." basicamente nos dizendo que precisamos chamar a função de set do valor no evento de onChange ou definir o campo como apenas leitura.

[Componentes Não Controlados](https://pt-br.reactjs.org/docs/uncontrolled-components.html) por sua vez possuem o comportamento padrão do ES5, o que seria o componente caso não tivesse nenhuma interração do React.**O componente apenas será editável/Não Controlado caso o useState tenha sido definido acidentalmente como null ou undefined**.

---

## Class Components🤷

Até o momento sempre trabalhamos com [functional components](https://www.geeksforgeeks.org/reactjs-functional-components/) por ser a maneira mais atual e convencional de criar componentes no React, porém antes da versão 16.8 de 6 de fevereiro de 2019 não era possível manipular states em componentes funcionais, somente em componentes de classe, também era necessário gerenciar todo o ciclo de vida dos [Class Components](https://www.w3schools.com/react/react_class.asp). É muito mais verboso que os componentes funcionais e o uso de hooks não é possível, sendo necessário utilizar a referência `this` da classe para poder ter acesso a state e props para poder manipulá-los, abaixo temos a implementação do componente contador utilizando Class Components:

```jsx
import { Component } from "react";

export default class ClassCounter extends Component {

    state = {
        iteratedValue: 0,
        counterIn: this.props.counterIn ?? 1
    }

    increment = () => {
        this.setState({ iteratedValue: this.state.iteratedValue + this.state.counterIn });
    }

    decrement = () => {
        this.setState({ iteratedValue: this.state.iteratedValue - this.state.counterIn });
    }

    render() {
        return (
            <div className="default">
                <h1>Contador😸</h1>
                <h4>Incrementando de {this.state.counterIn} em {this.state.counterIn}</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <button onClick={this.decrement}>-</button>
                    <h3>Valor: {this.state.iteratedValue}</h3>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
```

Utilizando o componente:
```jsx
import { Component } from "react";
import ClassCounter from "../../components/ClassCounter";

export default class classComponent extends Component {
    render() {
        return (
            <div style={{display: "flex", justifyContent:"space-around"}}>
                <ClassCounter counterIn={5} />
                <ClassCounter />
            </div>
        )
    }
}
```

---

## Integrando TypesCript🙏

Podemos integrar o superset de JS o [TypesCript](https://www.typescriptlang.org/) de uma maneira muito simples, basta criarmos um arquivo chamado tsconfig.json na raiz do projeto, ao tentar subir o projeto novamente não vai mais ser possível, ele vai requerer que adicionemos as lib's do TS como dev dependencies, que são elas:
```
yarn add --dev typescript @types/react @types/node
``` 

Após subir a aplicação já podemos criar nosso primeiro componente .tsx:
```ts
interface componentProps {
    name: string;
    idade: number;
}

export default function TsComponent(props: componentProps) {
    return(
        <div>
            <h4>Nome: {props.name}</h4>
            <h4>Nome: {props.idade ?? 'Não informada'}</h4>
        </div>
    );
}
```

Utilizando componente com tipagem:
```ts
import TsComponent from "../../components/TsComponent";

export default function exempleTS() {
    return (
        <div>
            <TsComponent name="Sandrolax" idade={23} />
            <TsComponent name="Gabriellix" />
        </div>
    )
}
```

---

## ContextAPI

Podemos criar props globais para nossa aplicação e acessá-lo que qualquer componente, isso é útil para evitar ficar passando props entre componentes múltiplas vezes até que ela chegue em nosso componente de destino, não ficar perfurando toda a aplicação([Prop-drilling](https://ordinarycoders.com/blog/article/react-prop-drilling-passing-props)) e ele é muito utilizado para tema UI global, idioma de aplicação, se o usuário está logado e etc. Para criar o [Contexto](https://pt-br.reactjs.org/docs/context.html#reactcreatecontext) é necessário criar um arquivo como no exemplo abaixo:

Componente de contexto:
```jsx
import React from "react";
import { useState } from "react";

const AuthContext = React.createContext();

export default function AuthProvider(props) {
    const [data, setData] = useState({ name: "Sandrolax" });

    return (
        <AuthContext.Provider value={{data, setData}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return React.useContext(AuthContext);
}
```

Acima estamos criando o contexto e adicionando a ele o objeto data e sua respectiva função de alteração utilizando o hook useState.

Outro passo **IMPORTANTE** é envolver o componente raiz do projeto com o contexto para que seja possível acessar o contexto em toda a aplicação.

Componente raiz, utilizando componente de contexto:
```jsx
import "../styles/globals.css";
import AuthProvider from "../providers/auth";

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}
```

Após iss podemos utilizar as propriedades de contexto em qualquer lugar da aplicação, como por exemplo:

```jsx
import { useAuth } from "../../providers/auth"

export default function usingContext() {
    const { data, setData } = useAuth();

    return(
        <div className="default">
            <h1>Nome presente no contexto: {data.name}</h1>
            <hr />
            <h4>Insira um nome para modificar a variavél do contexto:</h4>
            <input type="text" onChange={e => setData({name: e.target.value})} />
        </div>
    )
}
```

---

## React Hooks

Learning About after