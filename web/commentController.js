var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/TagsDao");
var commentDao = require("../dao/CommentDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var captcha = require("svg-captcha");
var url = require("url");

var path = new Map();
// 增加评论
function addComment(request, response) {
  var params = url.parse(request.url, true).query;

  commentDao.insertComment(parseInt(params.bid), parseInt(params.parent), params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function (result) {
    response.writeHead(200);
    response.write(respUtil.writeResult("success", "评论成功", null));
    response.end();
  })
}
path.set("/addComment", addComment);

function queryRandomCode(request, response){
  var img = captcha.create({fontSize: 50, width: 100, height: 34})
  response.writeHead(200);
  response.write(respUtil.writeResult("success", "验证码查询成功", img));
  response.end();
}
path.set("/queryRandomCode", queryRandomCode);

module.exports.path = path;
