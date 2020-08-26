const Mock = require('mockjs')
const Random = Mock.Random
// 获取值类
function getItem (type) {
  switch(type) {
    case "cname":
      return Random.cname();
    case 'data':
      return Random.date();
    case 'city':
      return Random.city();
    case 'image':
      return Random.image();
    case 'cparagraph':
      return Random.cparagraph();
    case 'guid':
      return Random.guid();
    case 'increment':
      return Random.increment(100);
    case 'integer':
      return Random.integer(60,100)
    default:
      return getStates(type);
  }
}

// 生成相应数据
const getItemObj = (_obj) => {
  const _o = {};
  Object.keys(_obj).forEach(k => {
    _o[k] = getItem(_obj[k])
  }) 
  return _o; 
}

// 公用方法已经提取
const getDataSource = (num, _obj, type) => {
  let dataItem = type == 'object' ? {} : [];
  if(type == 'object'){
    return _obj;
  } else {
    for (let i = 0; i< num; i++){
      dataItem.push(getItemObj(_obj))
    }
  }
  return dataItem;
}

const getStates = (list) => {
  const num = Math.floor( Math.random()*list.length);
  return list[num]
}


// -------------------------------------后期生成数据直接生成就成--------------------------------------- //
const simulateData = getDataSource(8, {
  name: 'cname', 
  date: 'date', 
  city: "city",
  img: 'image', 
  content: 'cparagraph',
  id: 'guid'
})


Mock.mock('/user/info', 'get', simulateData);
// 仪表管理数据生成
Mock.mock('/instrumentManagement/tableList', getDataSource(10, {
  name: 'cname',
  prise: 'integer',
  priseGold: 'integer',
  numCount: 'integer',
  status: ['S01', "S02", "S03"],
}))