var blogDao = require('../DAO/BlogDao')
var tagsDao = require('../DAO/TagsDao')
var tagBlogMapping = require('../DAO/TagBlogMappingDao')
var timeUtil = require('../util/timeUtil')
var respUtil = require('../util/respUtil')
var url = require("url")
var path = new Map()

function editBlog(request, response) {
  var params = url.parse(request.url, true).query;
  var tags = params.tags.replace(/ /g, "").replace("，", ",");
  request.on("data", function (data) {
    blogDao.insertBlog(params.title, data.toString(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function (result) {
      response.writeHead(200);
      response.write(respUtil.writeResult("success", "添加成功", null));
      response.end();
      var blogId = result.insertId;
      var tagList = tags.split(",");
      for (var i = 0 ; i < tagList.length ; i ++) {
        if (tagList[i] == "") {
          continue;
        }
        queryTag(tagList[i], blogId);
      }
    });
  });
}
path.set("/editBlog", editBlog)

function queryTag(tag, blogId) {
  tagsDao.queryTag(tag, function (result) {
    console.log()
    if (result == null || result.length == 0) {
      insertTag(tag, blogId);
    } else {
      tagBlogMapping.insertTagBlogMapping(result[0].id, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
    }
  });
}

function insertTag(tag, blogId) {
  tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
    insertTagBlogMapping(result.insertId, blogId);
  });
}

function insertTagBlogMapping(tagId, blogId) {
  tagBlogMapping.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {});
}

module.exports.path = path