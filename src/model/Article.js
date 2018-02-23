import loadFile from '../helpers/loadFile';

import { getFilenames } from '../helpers/pathHelper';

export default class Article {
  constructor(props) {
    this.body = props.body;
    this.source = props.source;
    this.format = props.format;
    this.articleName = props.articleName;
  }

  static load(path) {
    debugger;
    const paths = getFilenames(path);
    const content = loadFile(paths);
    return new Article({
      body: 'TBI:render!'+content,
      source: content,
      format: 'unknown',
      articleName: path
    });
  }
}