O GSAP () é um conjunto de ferramentas para animação que utiliza scripts. É muito versátil e com muitos recursos de animação para CSS, SVG e DOM.

No caso do SVG, é possível animar com poucas linhas atributos como `viewBox`, `width`, `height`, `fill`, `stroke`, `cx`, `r`, `opacity` e criar efeitos como o que estamos fazendo aqui no curso, ou ainda mais elaborados. Basicamente, podemos utilizar sempre a mesma estrutura simples para fazer essa animações, sempre passando para o código duas informações:

* Targets (ou alvos): Os objetos que estão sendo animados. Pode ser um objeto, uma array de objetos, ou utilizando um seletor como `.minhaClasse`.
* Vars: um objeto JavaScript que tem as propriedades/valores do que está sendo animado. Por exemplo:

```
{ opacity: 0.5, rotation:45}
```

E outras propriedades especiais, como onComplete, que recebe uma função para ser executada ao fim da animação. Por exemplo, para animar um elemento com id logo de sua posição atual para 100 no eixo X, em 1 segundo:

Via CSS:

```
#logo {
  transform: translateX(100px)
}
```

Utilizando GSAP:

```
TweenMax.to("#logo", {duration: 1, x: 100});
```

A documentação é bem extensa e tem muitos exemplos no [CodePen da própria GreenSock](https://codepen.io/GreenSock). Como sempre, temos que praticar e pesquisar para ir descobrindo aos poucos tudo o que cada biblioteca pode fazer.

Mais na [documentação oficial](https://greensock.com/get-started/) (em inglês) e nesse [tutorial em português](https://rossener.com/loaders-animados-com-gsap-parte-1/).