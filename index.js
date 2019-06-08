var express = require("express")
var globalConfig = require("./config")
var loader = require("./loader")

var app = new express()

app.use(express.static("./page/"))

app.post("/editEveryDay", loader.get("/editEveryDay"))
app.get("/queryEveryDay", loader.get("/queryEveryDay"))

app.post("/editBlog", loader.get("/editBlog"))
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"))

app.get("/queryBlogCount", loader.get("/queryBlogCount"))
app.get("/queryBlogById", loader.get("/queryBlogById"))

app.get("/queryBlogById", loader.get("/queryBlogById"))
app.get("/addComment", loader.get("/addComment"))

app.get("/queryRandomCode", loader.get("/queryRandomCode"))

app.listen(globalConfig.port, function () {
  console.log("服务已启动");
})
