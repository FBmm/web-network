const https = require('https');
const fs = require('fs');
require('json-js');
const hostname = '127.0.0.1';
const port = 8000;

const options = {
  key: fs.readFileSync('file/privatekey.pem'),
  cert: fs.readFileSync('file/certificate.pem')
};

const server = https.createServer(options, (req, res) => {
  req.on('data', (chunk) => {
    // console.log(`接收到 ${chunk.length} 个字节的数据`);
    console.log(JSON.parse(chunk))
  });
  // fs.writeFile(`logs/log-${req.url.replace(/\//,"")}-${req.method}-${Date.now()}.json`, JSON.stringify(JSON.decycle(req)), (err) => {
  //   if (err) throw err;
  //   console.log('请求日志已保存');
  // })
  res.writeHead(200);
  res.end('你好，世界\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 https://${hostname}:${port}/`);
})