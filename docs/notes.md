# Estudando NextJS

## Estrutura de Pastas

Pasta Styles: Contem o CSS global da aplicação, e o CSS modularizado com a nomenclatura do NomeComponent.module.css, por exemplo: Home.module.css.

Pasta Public: Colocar arquivos de imagem, vídeos, gifs e fontes, esses arquivos vão ser servidos de forma estática quando a aplicação estiver sendo executada.

Pasta Pages: Onde temos o index.jsx que é o arquivo que está sendo renderizado em localhost, também temos o _app.jsx que está executando o index.jsx, e por último uma pasta chamada api, onde podemos criar alguns end-points, e realizar processamento de ações simples enviar um e-mail e etc. Toda estrutura de pastas e arquivos criados dentro desta pasta criará uma rota para o arquivo adicionado. 

---

## Primeiro Componente e Rotas

Em firstComponent.jsx

```jsx
export default function FirstComponent() {
    return "O primeiro de muitos!";
}
```

Para criar rotas de páginas no next, basta adicionar novos arquivos na pasta page, e para criar rotas mais elaboradas, basta construir uma estrutura de pastas, ex: pages/bank/balance.jsx seria exibido em localhost/bank/balance, o componente criado acima seria acessado em localost:3000/firstComponent

---

## JSX

JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de template, mas com todo o poder do JavaScript. JSX é compilado para chamadas React.createElement() que retornam objetos JavaScript simples chamados “elementos React”. No next podemos simplesmente utilizar o JSX sem precisar utilizar a api do React citada anteriormente.

React DOM usa a convenção de nomenclatura de propriedades camelCase em vez dos nomes de atributos HTML. Por exemplo, tabindex torna-se tabIndex em JSX. O atributo class também é escrito como className, já que class é uma palavra reservada em JavaScript:

Ex: helloNext.jsx

```jsx
export default function HelloNext() {
    const world = 'Next🔥!';

    return <h1 className="hello">Hello {world}</h1>;
}
```

---

## Integração JS e JSX

Podemos integrar facilmente dados provenientes do mundo do JS no retorno JSX do componente, fazemos isso utilizando o famoso bigodinhos '{}' com o elemento JS que queremos, também podemos armazenar elementos JSX em constantes JS e apresentar no JSX com o {}, também podemos referenciar funções e chamar código nos dos bigodinhos, como no exemplo abaixo:

```jsx
export default function Home() {
    const jsxArmazenado = <h1>Hello World🔥</h1>;
    
    function funcaoJs() {
        return <h2>{"JSX on 🔥".toUpperCase()}</h2>;
    }

    return (
        <div>
            {jsxArmazenado}
            {funcaoJs()}
            <p>
                {JSON.stringify({nome: 'Sandolax', idade: 22})}
            </p>
        </div>
    );
}
```

---

## CSS Global

O css global é chamado no arquivo _app.jsx que renderiza todos os arquivos da aplicação, podemos criar quantos css globais quisermos, só precisamos chamar ele no arquivo _app.jsx.

---

## CSS Modularizado

O CSS modularizado vai ser utilizado para estilizar componentes em específico, para utilizar esse tipo de estilização criamos um arquivo seguindo o padrão de nomenclatura NomeComponente.module.css, como no exemplo abaixo:

Stylish.module.css
```css
.purple {
    height: 100vh;
    background-color: rgb(165, 13, 196);
    color: #fff;
}

.purple h1 {
    margin: 0;
}
```

para utilizar esse CSS em nosso componente, importamos o arquivo da folha de estilos, e usamos no className com bigodinhos, como no exemplo abaixo:

```jsx
import styles from '../styles/Stylish.module.css';

export default function Stylish() {

    return (
        <div className={styles.purple}>
            <h1>Component stylized with CSS module</h1>
        </div>
    );

}
```

---

## Criando e Usando um Componente

Os componentes facilitam na reutilização de código sem duplicalo, exemplo um botão em várias partes do sistema, ao inves de criar o botão em todo lugar que for necessário, criamos um componente de botão e 'chamamos' ele nos pontos que precisamos, também ajuda a criar uma unica identidade dos componentes da página.

Criando componente, na pasta components, ex: Cabecalho.jsx

```jsx
export default function Cabecalho() {
    return (
        <header>
            <h1>Fundamentos de NextJS & React</h1>
        </header>
    );
}
```

Para utilizar esse componente é muito simples, basta importalo, e instancialo como se estivese chamando uma tag HTML.

```jsx
import Cabecalho from "../components/Cabecalho";

export default function UsingComponents() {
    return (
        <>
            <Cabecalho />
            <Cabecalho />
        </>
    );
}
```

No Next/React não é possível retornar dois elementos JSX no return do component function, por isso precisamos envolvelos com uma tag div ou com um JSX fragment <>Dois ou mais componentes</>. 

---

## Passando Props para Componentes

É extremamente importante que possamos estilizar os componentes, não se restringindo somente a parte visual, também precisamos passar valores, como por exemplo, um componente botão que mude o texto que está dentro dele, seria muito inutil um componente imutável nesse cenario.

Ex: CabecalhoProps.jsx

```jsx
export default function CabecalhoProps(props) {
    return (
        <header>
            <h1>NextJS é {props.top}</h1>
        </header>
    );
}
```

Passando as propriedades em quem instanciou o componente. 
Ex: usingComponentsWithProps.jsx

```jsx
import CabecalhoProps from "../components/CabecalhoProps";

export default function usingComponentsWithProps() {
    return (
        <>
            <CabecalhoProps top='👌' />
        </>
    );
}
```

--- 

## Navegação Nativa nos Componentes

O next prove o componente Link para fazermos a navegação entre nossos componentes. Basta importar o componente e dentro da tag colocamos o nome do componente, e na propria tag temos a propriedade href aonde informamos a rota para onde iremos. Ex: index.jsx

```jsx
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Link href='/jsx' >
                JSX Exemple
            </Link>
        </>
    );
}
```

---