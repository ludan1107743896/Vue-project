const Mock = require('mockjs')
const Random = Mock.Random


const getDataSource = (num, _obj, type) => {
  let dataItem = type == 'object' ? {} : [];
  if(type == 'object'){
    return _obj;
  } else {
    for (let i = 0; i< num; i++){
      dataItem.push(_obj);
    }
  }
  return {data: dataItem};
}

// mock一组数据
const simulateData = getDataSource(8, {
  name: Random.cname(), 
  date: Random.date(), 
  city: Random.city(),
  img: Random.image(), 
  content: Random.cparagraph(),
  id: Random.guid()
})


Mock.mock('/user/info', 'get', simulateData)