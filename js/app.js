
// With parameter
import axios from "axios";

/**
 * axios 使用样例
 * @type {string}
 */
const Url='https://jsonplaceholder.typicode.com/posts';
const params={name:"Said",id: 21}
  axios.get(Url,params).then(data=>console.log(data)).catch(err=>console.log(err))


const user={name:"Said",id:21}
  axios({method: 'post',url: Url,data: {user}}).then(data=>console.log(data)).catch(err=>console.log(err))
