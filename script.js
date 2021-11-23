const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
const assideButton = document.getElementById('submitYear');
const personYear = document.getElementById('birthYear');
const zodiacDaemon = document.getElementById('zodiacImage');

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

/* 
!!não existe um evento load para o tipo de objeto element - ver: https://developer.mozilla.org/en-US/docs/Web/Events !!

temos, no entanto, o evento load para o objeto window, que é o evento que indica que todos os elementos da página foram carregados
com sucesso - ver: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

headerElement.addEventListener('load', loadContent(headerContent, headerElement));
mainElement.addEventListener('load', loadContent(mainContent, mainElement));

Ambas as expressões acima estão completamente erradas, o método addEventListener retorna um objeto event para uma função que trata o
fluxo baseada nesse objeto, dessa forma não podemos definir qulquer função, mas essa deve ser um event handler que pode, entre outras coisas,
invocar outra função qualquer. Mais gritante, no entanto, é que o evento load não existe para objetos do tipo element, de forma que,
se arrumanda a função eventHandler, passaremos a não ter qualquer retorno, pois nunca teremos a ocorrência do evento em questão.
*/
/*
a função invocada deve tratar o recebimento de um objeto do tipo event, por exemplo chamando uma função específica se o objeto existir
que é o nosso caso, mas o objeto event é muito rico em informações, possuindo informações sobre como o evento ocorreu, o que
possibilita tratar a reação da função com base nesses dados - ver: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback
*/
/* para uma aula geral ver: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events */
window.addEventListener('load', () => {loadContent(headerContent, headerElement)});

window.addEventListener('load', () => {loadContent(mainContent, mainElement)});

function loadContent (content, tag) {
  tag.innerHTML = content;
}

/*ASSIDE */

assideButton.addEventListener('click', findMyDaemon);

const mouse = ['assets/images/asside-images/rato.jpg', 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020];
const ox = ['assets/images/asside-images/boi.jpg', 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021];
const tiger = ['assets/images/asside-images/tigre.jpg', 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022];
const rabit = ['assets/images/asside-images/coelho.jpg', 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023];
const dragon = ['assets/images/asside-images/dragao.jpg', 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024];
const snake = ['assets/images/asside-images/serpente.jpg', 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025];
const horse = ['assets/images/asside-images/cavalo.jpg', 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026];
const sheep = ['assets/images/asside-images/carneiro.jpg', 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027];
const monkey = ['assets/images/asside-images/macaco.jpg', 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016];
const rooster = ['assets/images/asside-images/galo.jpg', 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029];
const dog = ['assets/images/asside-images/cao.jpg', 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030];
const pig = ['assets/images/asside-images/porco.jpg', 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031];

const zodiac = [mouse, ox, tiger, rabit, dragon, snake, horse, sheep, monkey, rooster, dog, pig];

function findMyDaemon () {

  const year = personYear.value;

  console.log(year);
  
  zodiac.map(animal => {
    console.log(animal + "testando");
    animal.map((date) => {
      console.log(date + "testando");
      if (isNaN(year)) {return};
      if (date == year) {
        return (zodiacDaemon.src = animal[0]);
      }
    })
  })
  
}