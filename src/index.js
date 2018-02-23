import Article    from './model/Article';
import articleView from './view/article';
import dotenv     from 'dotenv';
import express    from 'express';
import path       from 'path';

const app = express();

dotenv.load({ path: '.env.local' })

// serve static assets
app.use(express.static('src/static'));

// serve articles
app.get('*', (req,res) => {
  const article = Article.load(req.path).render();
  const menu = Article.loadMenu(req.path).render({ noH1:true });
  const style = Article.loadStyle(req.path);
  res.send(articleView({
    article,
    menu,
    style,
    toc: article.toc,
  }));
});



app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));



function getDefaultServerVariables() {
  return {
      article: {
        body: '<h1>Hello World</h1><p>How are you</p>',
        source: '# Hello World\n\nHow are you',
        format: 'markdown',
        filename: 'fakeArticle.md'
      },
      menu: {
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
      },
      toc: {
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
      // menu: [
      //   { label:'Foo', path:'/foo', children:[
      //     { label:'Foo 1', path:'/foo1' },
      //     { label:'Foo 2', path:'/foo2' },
      //     { label:'Foo 3', path:'/foo3' },
      //   ]},
      //   { label:'Bar', path:'/bar', children:[
      //     { label:'Bar 1', path:'/bar1' },
      //     { label:'Bar 2', path:'/bar2' },
      //     { label:'Bar 3', path:'/bar3', children: [
      //       { label: 'Bar 3a', path:'/bar3a' },
      //       { label: 'Bar 3b', path:'/bar3b' },
      //       { label: 'Bar 3c', path:'/bar3c' },
      //     ]},
      //   ]},
      // ]
    }
}