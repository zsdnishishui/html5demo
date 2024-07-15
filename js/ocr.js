
const Tesseract = require('tesseract.js');
function hello(){

  Tesseract.recognize(
      '/img/1.png', // 输入图片的路径
      'chi_sim', // 指定语言模型，支持多种语言组合，用加号分隔
      { logger: m => console.log(m) } // 输出识别结果的回调函数
  ).then(({ data: { text } }) => {
    console.log(text); // 输出识别结果
  }).catch(err => {
    console.error(err); // 输出错误信息
  });
}



exports.hello = hello;
