
// With parameter
import axios from "axios";

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
const url='http://127.0.0.1:8090/base/test/testPublishEvent1';
// axios.get(url).then(data=>console.log(data)).catch(err=>console.log(err))
// axios.post(url,{}).then(data=>console.log(data)).catch(err=>console.log(err))
//
// axios.put(url,{}).then(data=>console.log(data)).catch(err=>console.log(err))
//
//
// axios.delete(url).then(data=>console.log(data)).catch(err=>console.log(err))

const Tesseract = require('tesseract.js');
Tesseract.recognize(
  'img/1.png', // 输入图片的路径
  'chi_sim', // 指定语言模型，支持多种语言组合，用加号分隔
  { logger: m => console.log(m) } // 输出识别结果的回调函数
).then(({ data: { text } }) => {
  console.log(text); // 输出识别结果
}).catch(err => {
  console.error(err); // 输出错误信息
});
