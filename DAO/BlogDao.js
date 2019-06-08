var dbutil = require("./DBUtil")

function insertBlog(title, content, tags, views, ctime, utime, success) {
  var insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
  var params = [title, content, tags, views, ctime, ctime];

  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result);
    } else {
      console.log(error);
    }
  });
  connection.end();
}
function queryBlogByPage(page, pageSize, success) {
  var insertSql = "select * from blog order by id desc limit ?, ?;";
  var params = [page * pageSize, pageSize];

  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result);
    } else {
      console.log(error);
    }
  });
  connection.end();
}
// 查询blog条数
function queryBlogCount(success) {
  var querySql = "select count(1) as count from blog;";
  var params = [];

  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error, result) {
    if (error == null) {
      success(result);
    } else {
      console.log(error);
    }
  });
  connection.end();
}

function queryBlogById(id, success) {
  var querySql = "select * from blog where id = ?;";
  var params = [id];

  var connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error, result) {
    if (error == null) {
      success(result);
    } else {
      console.log(error);
    }
  });
  connection.end();
}

module.exports.insertBlog = insertBlog
module.exports.queryBlogByPage = queryBlogByPage
module.exports.queryBlogCount = queryBlogCount
module.exports.queryBlogById = queryBlogById
