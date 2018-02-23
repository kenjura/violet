import loadFile from '../helpers/loadFile';
import WikiUtil from '../helpers/WikiUtil';

import { getPathParts, getFilenames } from '../helpers/pathHelper';

export default class Article {
  constructor(props) {
    this.body = props.body;
    this.source = props.source;
    this.format = props.format;
    this.articleName = props.articleName;
    this.db = props.db;
    this.toc = props.toc;
  }

  render(args={}) {
    const defaultArgs = { db:this.db, noTOC:false };
    const output = WikiUtil.wikiToHtml(this.source, this.articleName, { ...defaultArgs, ...args });
    this.body = output.html;
    this.toc = output.tocHtml;
    return this;
  }

  static load(path, which='article') {
    const [ db, articleName ] = getPathParts(path);
    const paths = getFilenames(path,undefined,which);
    const content = loadFile(paths);
    return new Article({
      source: content,
      format: 'unknown',
      articleName,
      db,
    });
  }
  static loadMenu(path) {
    return Article.load(path, 'menu');
  }
  static loadStyle(path) {
    return Article.load(path, 'style');
  }
}