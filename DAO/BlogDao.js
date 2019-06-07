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
module.exports.insertBlog = insertBlog
