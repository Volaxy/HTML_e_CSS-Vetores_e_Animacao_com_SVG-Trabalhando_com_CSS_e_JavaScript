A propriedade de CSS `animation` é uma "propriedade abreviada" (ou "shorthand property"), então podemos juntar várias propriedades em uma só, o que economiza linhas e deixa o código mais organizado. São elas:

* Animation-name (nome para "chamarmos" a animação)
* Animation-duration (duração em segundos ou milissegundos)
* Animation-timing-function (controla a velocidade da animação: a mesma durante a animação toda, mais lenta no início, mais lenta no final, etc)
* Animation-delay (o tempo de pausa antes de iniciar a animação, em segundos ou milissegundos)
* Animation-iteration-count (quantas vezes a animação será reproduzida em sequência)
* Animation-direction (a direção da animação: direção normal, de trás para frente, alternando normal e trás para frente, etc)
* Animation-fill-mode (podemos aplicar estilos diferentes na animação enquanto ela executa)
* Animation-play-state (especifica se a animação está sendo executada ou pausada)
Colocando isso num exemplo:

```
elemento {
  animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction];
}
```
ou:
```
.caiaque {
  animation: marola 5s linear 2s infinite alternate; 
}
```

Lembrando sempre que não é necessário inserir todos os valores a cada vez que chamamos a propriedade `animation`! Só precisamos inserir os que realmente precisamos declarar para que a animação funcione.

Por exemplo, se sua animação não precisa de uma pausa (delay) antes de iniciar, não é preciso declarar esse valor. Além disso, cada uma das propriedades de animação tem diversas opções de valor!

A documentação da [W3Schools](https://www.w3schools.com/cssref/css3_pr_animation.asp) (em inglês) define cada uma delas separadamente, com uma lista de cada valor que podemos utilizar em cada propriedade.

Como sempre, o ideal é praticar e modificar os valores para testarmos os resultados na tela!