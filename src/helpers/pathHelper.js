import path from 'path';

export function getFilenames(articlePath, articleRoot = process.env.ARTICLEROOT, which='article') {
  if (!articleRoot) return console.error('getFilenameFromPath > error > ARTICLEROOT is not specified!');
  if (!articlePath) return console.error('getFilenameFromPath > error > articlePath not specified!');

  const pathParts = getPathParts(articlePath);
  if (!pathParts) return console.error('getFilenameFromPath > error > unable to parse path properly');

  const articleName = {
    article: pathParts[1],
    menu: '_menu',
    style: '_style',
  }[which];

  return [
    path.join(articleRoot, pathParts[0], articleName),
    path.join(articleRoot, pathParts[0], articleName + '.txt'),
    path.join(articleRoot, pathParts[0], articleName + '.md'),
    path.join(articleRoot, pathParts[0], articleName + '.html'),
  ];
}

export function getArticleName(articlePath) {
  return getPathParts(articlePath)[1];
}

export function getDB(articlePath) {
  return getPathParts(articlePath)[0];
}

export function getPathParts(articlePath) {
  const matches = PATH_PART_RE.exec(articlePath);
  if (!matches) return null;
  return matches.slice(1,3).map(r => r || '_home');
}


const PATH_PART_RE = /\/?([^\/]+)(?:\/?(.*))/;
