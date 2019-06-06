var everyDay = new Vue({
  el: "#every_day",
  data: {
    content: "You must strive to find your own voice. Because the longer you wait to begin, the less likely you are to find it at all "
  },
  computed: {
    getContent() {
      return this.content
    }
  },
  created: {
    //  请求数据、给content赋值
  }
})

var articleList = new Vue({
  el: "#article_list",
  data: {
    page: 1,
    pageSize: 5,
    count: 100,
    pageNumList: [],
    articleList: [
      {   title: "四联杀幽门螺杆菌第三天",
        content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
        date: "2018-10-10",
        views: "101",
        tags: "test1 test2",
        id: "1",
        link: "www.baidu.com"
      },
      {   title: "四联杀幽门螺杆菌第三天",
        content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
        date: "2018-10-10",
        views: "101",
        tags: "test1 test2",
        id: "1",
        link: "www.baidu.com"
      },
      {   title: "四联杀幽门螺杆菌第三天",
        content: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
        date: "2018-10-10",
        views: "101",
        tags: "test1 test2",
        id: "1",
        link: "www.baidu.com"
      }
    ]
  },
  computed: {

  },
  created:{

  }
})
