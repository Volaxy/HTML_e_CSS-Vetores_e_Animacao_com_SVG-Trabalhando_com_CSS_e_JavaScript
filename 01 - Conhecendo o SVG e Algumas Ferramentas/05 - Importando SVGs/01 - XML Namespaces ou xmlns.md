Você deve ter percebido que alguns códigos em `<svg>`, especialmente os que geramos através de conversores/exportadores como o Illustrator, apresentam informações como estas:

```
<svg xmlns="http://www.w3.org/2000/svg">
    <!-- elementos gráficos -->
</svg>
```

Mas o que significa o atributo `xmlns` (XML NameSpace)?

Vamos lembrar que o SVG é uma linguagem de marcação, da família XML (Extensible Markup Language, ou Linguagem de Marcação Extensível). O XML é uma "metalinguagem" que permite ao usuário a criação de suas próprias linguagens de marcação, baseadas nesse modelo. Ou seja, é permitida a criação de outros elementos (ou tags) além das já definidas, por exemplo, no HTML.

Uma vez que é possível criar tags, é possível que existam duas tags com o mesmo nome, criadas em ocasiões diferentes e com usos diferentes? Sim, e os namespaces existem para evitar confusões. Durante o curso pode parecer estranho que isso aconteça, mas vamos lembrar que o XML também é utilizado em estruturas de dados, como neste exemplo:

```
<info>
 <nome>Aline A</nome>
 <empresa>Code Dev</empresa>
 <celular>11-99999-9999</celular>
 <email>marcia@email.com</email>
</info>
<info>
 <nome>Ariadne B</nome>
 <empresa>Code Dev</empresa>
 <celular>11-99999-8888</celular>
 <email>julia@email.com</email>
</info>
```

Então, diferentes tipos de conteúdo XML (ou baseados em XML) podem estar presentes em um mesmo documento, e como o usuário pode definir suas tags, como no exemplo acima, o namespace define a qual marcação pertence tal tag. O formato `http://www.w3.org/2000/svg` é um padrão da W3 para o namespace e não precisa ser "linkável", apenas é uma informação que garante que todas as tags que estão aninhadas dentro do elemento-pai (`<svg>`) são, com certeza, elementos do tipo SVG e devem ser renderizadas/interpretadas de acordo.

No nosso caso, não precisamos nos preocupar muito (já vimos que em um exemplo simples o SVG não deixará de funcionar sem o namespace), apenas podemos deixar o atributo declarado em nosso código.

Para saber mais sobre namespaces e sua importância, você pode visitar este [artigo no MDN](https://developer.mozilla.org/pt-BR/docs/Web/SVG/Intensivo_de_Namespaces) (em português).