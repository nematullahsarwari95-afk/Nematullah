const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let filePath = req.url.split("?")[0];
  if (filePath === "/") filePath = "/index.html";
  const fullPath = path.join(ROOT, filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Not Found</h1>");
      return;
    }
    const ext = path.extname(fullPath);
    const type = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop");
  
  // Auto-open browser
  const url = `http://localhost:${PORT}`;
  const startCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  require('child_process').exec(startCmd + ' ' + url);
});
