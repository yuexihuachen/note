const deepClone = (obj: object) => {
    return JSON.parse(JSON.stringify(obj))
}

/*
    例子 : https://mc.hujiang.com?a=1&b=2&c=3
*/
const getQueryStringArgs = function () {
    if (!location.search) return {};
    let qs = location.search.substring(1).split("&");
    let args: any = {};
    for (let i = 0; i < qs.length; i++) {
      let idx = qs[i].indexOf("=");
      let name = qs[i].substring(0, idx);
      let val = qs[i].substring(idx + 1);
      args[name] = decodeURIComponent(val);
    }
    return args;
  };
  
  /*
        说明 : https://mc.hujiang.com/{ classid }/{ productid }/{ pointid }
        例子 : https://mc.hujiang.com/1345334/1/3
    */
const getUrlStrArgs = function (strNum = 1) {
    // 取得url路径字符串
    let pathStr = location.pathname
    if (pathStr.endsWith('/')) {
      pathStr = pathStr.slice(0, pathStr.length - 1)
    }
    let qs = pathStr.split("/");
    let args = [];
    let len = qs.length;
    // 逐个将每一项添加到 args 对象中
    for (let i = strNum; i >= 1; i--) {
      args[args.length] = qs[len - i];
    }
    return args;
  };


  const returnResult = function(result: any): void {
    let str = '操作成功'
    if (result) {
      str = '操作失败'
    }
    alert(str)
  }

export {
    deepClone,
    getUrlStrArgs,
    getQueryStringArgs,
    returnResult
}