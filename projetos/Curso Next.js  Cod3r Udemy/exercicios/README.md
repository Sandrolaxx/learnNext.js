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

Doc do algoritimo: https://reactjs.org/docs/reconciliation.html

A solução mais adotada pela comunidade é a de utilizar o fragment, este que até resolve um problema na construção de componentes Coluna para tabelas, uma vez que retornando o componente de coluna em uma ```<div>``` quando o componente fosse colocado em uma tabela, esta ficaria incorreta.
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

Utilizando a tag fragment ```<></>``` o componente Coluna não teria uma ```<div>``` e assim ficaria correto na tabela.