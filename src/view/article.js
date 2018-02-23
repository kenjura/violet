import layout from './layout';
// import State from './State.js';

export default function(props) {
  return layout({
    children: `<article id="mainContent">${props.article.body}</div>`,
    article: props.article,
    menu: props.menu,
    style: props.style,
    toc: props.article.toc
  })
}