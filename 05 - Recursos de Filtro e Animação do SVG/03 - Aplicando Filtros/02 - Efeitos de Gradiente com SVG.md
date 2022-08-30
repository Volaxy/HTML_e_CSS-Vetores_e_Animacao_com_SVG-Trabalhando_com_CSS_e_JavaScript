Além dos filtros, podemos também usar o SVG para criar efeitos de gradiente de cores. Assim como os filtros, usamos a tag `<defs>` para declarar efeitos de gradiente que podem ser utilizados mais tarde em qualquer vetor do código. Por exemplo:

```
<svg height="150" width="400">
    <defs>
        <linearGradient id="gradiente">
            <stop offset="20%" style="stop-color:#0003c7;stop-opacity:1" />
            <stop offset="80%" style="stop-color: #FFC300;stop-opacity:1" />
        </linearGradient>
    </defs>

    <rect height="150" width="400" fill="url(#gradiente)" />
</svg>
```

![Imagem 1](assets/Images/img1.png)

Utilizamos a tag `<linearGradient>` para criar um novo gradiente, que demos o id "gradiente". Quando formos utilizar esse efeito, será pelo id que ele será referenciado. As tags `<stop>` indicam cada uma das cores que vamos usar no gradiente, com possibilidades infinitas. Aqui eu usei um tom de azul e outro de laranja, usando o sistema hexadecimal de cores. É possível usar também RGB ou RGBA (no caso do RGBA, não precisamos da propriedade `stop-opacity`, pois a opacidade já está declarada como 1.0):

```
<stop offset="20%" style="stop-color:rgb(0, 3, 199);stop-opacity:1" />
<stop offset="80%" style="stop-color:rgba(255, 195, 0, 1.0);" />
```

É possível criar gradientes lineares ou radiais e aplicá-los em `fill`, `stroke` e etc. A documentação do [W3Schools](https://www.w3schools.com/graphics/svg_grad_linear.asp) conta com mais exemplos!