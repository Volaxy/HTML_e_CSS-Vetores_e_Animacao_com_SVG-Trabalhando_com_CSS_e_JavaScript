Utilizamos o `translate` para mover os cards na aula, mas como seria para usar outros efeitos de animação de CSS?

Esse é o trecho de código que usamos na aula:

```
this.cardEsq.style.transform = `translate(${-(posicao + 20)/10}%)`;
this.cardDir.style.transform = `translate(${(posicao + 20)/10}%)`;
```

O `translate` recebe como argumento coordenadas X e/ou Y para mover o elemento selecionado. Mas CSS tem outras propriedades que podemos usar para mover e animar elementos. Que tal seria se, ao invés de `translate`, usássemos a propriedade `rotate` para animar os cards?

```
this.cardEsq.style.transform = `rotateY(${-(posicao + 20)/2}deg)`;
this.cardDir.style.transform = `rotateY(${(posicao + 20)/2}deg)`;
```