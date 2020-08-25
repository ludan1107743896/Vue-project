// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let data1 = []
  for (let i = 0; i < 8; i++) {
    let data = {
      name: Random.cname(), 
      date: Random.date(), 
      city: Random.city(),
      img: Random.image(), 
      content: Random.cparagraph(),
    }
    data1.push(data)
  }
  
  return {
    data: data1
  }
}

Mock.mock('/user/info', 'get', simulateData)