var randomTags = new Vue({
  el: "#random_tags",
  data: {
    tags: [],
  },
  computed: {
    randomColor: function () {
      return function () {
        var red = Math.random() * 255;
        var green = Math.random() * 255;
        var blue = Math.random() * 255;
        return "rgb(" + red + ", " + green + ", " + blue + ")";
      }
    },
    randomSize: function () {
      return function () {
        var size = (Math.random() * 20 + 8) + "px";
        return size;
      }
    }
  },
  created: function () {
    axios({
      method: "get",
      url: "/queryRandomTags"
    }).then(function (resp) {
      var result = [];
      for (var i = 0 ; i < resp.data.data.length ; i ++) {
        result.push(resp.data.data[i].tag);
      }
      randomTags.tags = result;
    });
  }
})

var newHot = new Vue({
  el: "#new_hot",
  data:{
    titleList: []
  }
})

var newComments = new Vue({
  el: "#new_comments",
  data: {
    commentList:[
      {
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },{
        name: "这是用户名",
        date: "2018-02-03",
        comment: "抱歉、因为种种原因，不能实现外部站点链接"
      },
    ]
  },
  created: function () {
    axios({
      method: "get",
      url: "/queryHotBlog"
    }).then(function (resp) {
      var result = [];
      for (var i = 0 ; i < resp.data.data.length ; i ++) {
        var temp = {};
        temp.title = resp.data.data[i].title;
        temp.link = "/blog_detail.html?bid=" + resp.data.data[i].id;
        result.push(temp);
      }
      newHot.titleList = result;
    });
  }
})
