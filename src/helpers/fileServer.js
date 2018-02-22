const fs     = require('fs');
const path   = require('path');
const Router = require('express').Router();

module.exports = fileServer;


function fileServer(rootDir, fallbackPath) {
  if (!rootDir || !fs.existsSync(rootDir)) return console.error(`fileServer > error > rootDir "${rootDir}" is not a valid directory`);
  Router.get('*', (req, res, next) => {
    const { content, type } = getFile(rootDir, req.path, fallbackPath);
    res.set('content-type', type);
    res.status(200).send(content);
  });
  return Router;
}


function getFile(base, url_pathname, fallbackPath) {
  const ext = getExt(url_pathname);
  const type = getType(ext);
  const pathname = url_pathname === '/' ? 'index.html' : url_pathname;
  const req_path = path.join(base, pathname);
  const fallback_path = path.join(base, fallbackPath);
  const content = fs.existsSync(req_path)
    ? fs.readFileSync(req_path, { encoding:'UTF-8' })
    : fs.readFileSync(fallback_path, { encoding:'UTF-8' });
  return {
    content,
    type,
  }

}

function getExt(pathname) {
  if (pathname.indexOf('.')<0) return 'html';
  return pathname.substr(pathname.lastIndexOf('.')+1);
}

function getType(ext) {
  switch (ext) {
    case 'js':    return 'application/javascript';
    case 'css':   return 'text/css';
    case 'ico':   return 'image/x-icon';
    case 'html':  return 'text/html';
    case 'jpeg':  return 'image/jpeg';
    case 'png':   return 'image/png';
    case 'svg':   return 'image/svg+xml';
    case 'woff':  return 'font/woff';
    case 'woff2': return 'font/woff2';
  }
}