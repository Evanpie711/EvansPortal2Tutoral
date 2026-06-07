const indexpath = "/docs/index/index.json";
var indexjson = fetch(indexpath)
    .then(htmlContent => {
    console.log(htmlContent); // Process your HTML content here
  });
