// 全局变量
const globalObj = {};

// 定义公共变量
globalObj.name = 'LPxz';

// 定义公共方法
globalObj.toWebsite = function (url) {
  window.location.href = url;
};

globalObj.reloadPage = function () {
  window.location.reload();
};

export default globalObj
