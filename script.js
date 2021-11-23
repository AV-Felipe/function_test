const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');

const headerContent = 
`<h1>
Meu Daemon
</h1>
<img src="assets/images/me-profile.jpg" alt="meu lindo rosto" />`;

const mainContent = 
`<h2>Elefante</h2>
<p>
  O animal com o qual eu me identifico, ou que, ao menos, eu admiro, é o elefante.
</p>
<p>
  O elefante é um animal que, via de regra, não precisa temer os outros animais, pois é grande forte
  e, geralmente, anda em bando. Essas características levariam a acreditar que ele é um predador natural,
  longe disso, o elefante é um animal herbivoro e pacato - tanto que hoje todas as três espécies
  existentes correm risco de extinção (não graças a seus predadores naturais, os quais são quase nulos, mas
  graças ao predador dos predadores, o homem).
</p>
<p>
  Não bastasse a imponência pacífica do elefante, esse ainda é um animal conhecido por sua memória, como
  atesta a sabedoria popular ao enaltecer essa faculdade: "memória de elefante". Mais um ponto para o
  meu amigo paquiderme!
</p>
<p>
  No Brasil, só poderemos ver esse magnífico irmão em zoológicos. Para vê-lo em seu habitat natural, temos que ir ao
  continente africano, onde poderemos encontrar duas das espécies existentes, ou asiático lar da terceira.
</p>
<p>
  Para saber um pouco mais sobre o elefante, veja seu artigo na <a href="https://pt.wikipedia.org/wiki/Elefante" target="_blank">wikipedia</a> e
  na <a href="https://www.worldwildlife.org/species/elephant" target="_blank">WWF</a>.
</p>`;

headerElement.addEventListener('load', loadContent(headerContent, headerElement));

mainElement.addEventListener('load', loadContent(mainContent, mainElement))

function loadContent (content, tag) {
  tag.innerHTML = content;
}