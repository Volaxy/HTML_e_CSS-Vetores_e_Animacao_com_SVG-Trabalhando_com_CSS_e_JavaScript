O método `addEventListener` funciona muito bem para manejar eventos de todo tipo que ocorrem no DOM, como cliques, scroll de tela, redimensionamento de janela, etc. A lista completa de eventos pode ser consultada [aqui](https://developer.mozilla.org/pt-BR/docs/Web/Events) (em português).

No caso dos cliques em botão, é considerado um método melhor do que utilizar o atributo onclick (por exemplo:

```
<button id="btn-novidades" onclick="funcao()">veja as novidades</button>
```

Pois permite um controle melhor dos eventos e de seus efeitos, além de separar melhor as responsabilidades do HTML e do JavaScript, sem "mistura" de códigos.

O método `addEventListener` ainda aceita um terceiro parâmetro, que pode ser `true` ou `false` (se não for declarado, é por padrão `false`). Esse parâmetro, chamado de `useCapture` e está relacionado aos estágios de `bubbling` e `capturing` de eventos no DOM (mais sobre esse processo [aqui](https://imasters.com.br/front-end/javascript-bubbling-e-capturing%22)). Este parâmetro é opcional nos navegadores mais atuais, porém é obrigatório em versões mais antigas de alguns navegadores.