/* Tiny static file server for the Isha preview.
   HTTP/1.1 keep-alive + correct MIME + no-store, so preview proxies
   (e2b / iframe hosts) can talk to it reliably. Run: node server.js 8080 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = parseInt(process.argv[2] || process.env.PORT || "8080", 10);
const ROOT = __dirname;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".md": "text/plain; charset=utf-8"
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath === "/" || urlPath === "") urlPath = "/index.html";
  const filePath = path.join(ROOT, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ""));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end("forbidden"); }

  fs.readFile(filePath, (err, buf) => {
    if (err) {
      // SPA-ish fallback: serve index.html for unknown paths
      return fs.readFile(path.join(ROOT, "index.html"), (e2, idx) => {
        if (e2) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("404"); }
        res.writeHead(200, {
          "Content-Type": TYPES[".html"],
          "Cache-Control": "no-store",
          "Access-Control-Allow-Origin": "*"
        });
        res.end(req.method === "HEAD" ? undefined : idx);
      });
    }
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Content-Length": buf.length,
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(req.method === "HEAD" ? undefined : buf);
  });
});

server.headersTimeout = 0;
server.requestTimeout = 0;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Isha server chal raha hai -> http://0.0.0.0:${PORT} (index.html ready)`);
});
