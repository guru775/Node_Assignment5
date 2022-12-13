const http = require("http");

function handleServer(req, res) {
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });
    res.end("from home page");
  } else if (req.url == "/welcome") {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });
    res.write("welcome to dominos!!!");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, "utf-8", { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.write("<center><h1>ooops!! 404 Page is not found</h1></center>");
    res.end();
  }
}

const httpServer = http.createServer(handleServer);

httpServer.listen(8081, () => {
  console.log("server is up at 8081 port");
});

module.exports = httpServer;
