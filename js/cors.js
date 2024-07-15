
// With parameter
// import axios from "axios";

const axios = require('axios');
/**
 * axios 使用样例
 * @type {string}
 */
// const url='https://jsonplaceholder.typicode.com/posts';
// const params={name:"Said",id: 21}
//   axios.get(url,params).then(data=>console.log(data)).catch(err=>console.log(err))
//
//
// const user={name:"Said",id:21}
//   axios({method: 'post',url: url,data: {user}}).then(data=>console.log(data)).catch(err=>console.log(err))

/**
 * 跨域的时候
 * get不会触发预检请求,直接到后端的controller里面，其他都会触发预检请求，预检请求不会到达controller里面
 * @type {string}
 */
function hello() {

  const url='http://127.0.0.1:8090/base/test/testPublishEvent1';
  axios.get(url).then(data=>console.log(data)).catch(err=>console.log(err))
  axios.post(url,{}).then(data=>console.log(data)).catch(err=>console.log(err))

  axios.put(url,{}).then(data=>console.log(data)).catch(err=>console.log(err))


  axios.delete(url).then(data=>console.log(data)).catch(err=>console.log(err))
  console.log(url)
}

exports.hello = hello;
