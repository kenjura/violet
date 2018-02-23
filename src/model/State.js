import Article from './Article.js';

class State {
  constructor() {
    // const server = window.server || {};
    // this.article = new Article(server.article);
    // this.menu = server.menu;
    // this.toc = server.toc;
    this.article = getDefaultArticle();
    this.menu = getDefaultMenu();
    this.toc = getDefaultTOC();
  }


}

const state = new State();

export default state;



function getDefaultMenu() {
  return {
        body: `<ul>
          <li>
            <a href="Foo">Foo</a>
            <ul>
              <li><a href="Foo 1">Foo 1</a></li>
              <li><a href="Foo 2">Foo 2</a></li>
              <li><a href="Foo 3">Foo 3</a></li>
            </ul>
          </li>
          <li>
            <a href="Bar">Bar</a>
            <ul>
              <li><a href="Bar 1">Bar 1</a></li>
              <li><a href="Bar 2">Bar 2</a></li>
              <li>
                <a href="Bar 3">Bar 3</a>
                <ul>
                  <li><a href="Bar 3a">Bar 3a</a></li>
                  <li><a href="Bar 3b">Bar 3b</a></li>
                  <li><a href="Bar 3c">Bar 3c</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>`
      }
}

function getDefaultTOC() {
  return {
        body: `<ul>
          <li>
            <a href="#Hello-World">Hello World</a>
            <ul>
              <li><a href="Foo 1">Foo 1</a></li>
              <li><a href="Foo 2">Foo 2</a></li>
              <li><a href="Foo 3">Foo 3</a></li>
            </ul>
          </li>
          <li>
            <a href="Bar">Bar</a>
            <ul>
              <li><a href="Bar 1">Bar 1</a></li>
              <li><a href="Bar 2">Bar 2</a></li>
              <li>
                <a href="Bar 3">Bar 3</a>
                <ul>
                  <li><a href="Bar 3a">Bar 3a</a></li>
                  <li><a href="Bar 3b">Bar 3b</a></li>
                  <li><a href="Bar 3c">Bar 3c</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>`
      }
}

function getDefaultArticle() {
  return {
        body: '<h1>Hello World</h1><p>How are you</p>',
        source: '# Hello World\n\nHow are you',
        format: 'markdown',
        filename: 'fakeArticle.md'
      }
}