import layout from './layout';
// import State from './State.js';

export default function(props) {

  return layout({
    children: `<div id="article">${props.article.body}</div>`
  })
}