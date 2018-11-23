
var http = require('http')
var test = require('./test')

var server = http.createServer()
server.on('request', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  var a = test.letter
  var b = test.sortStr
  res.write('字符串转换大小写：'+a)
  res.write('字符串排序：'+b)
  res.end()
  console.log('服务器收到请求')
})

server.listen(3000, function () {
  console.log('服务器已经启动，使用127.0.0.1访问')
})
