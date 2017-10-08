"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTabClassName = getTabClassName;
exports.getTitleByTab = getTitleByTab;
exports.getTabStr = getTabStr;
exports.getLastTimeStr = getLastTimeStr;
exports.fetchUsers = fetchUsers;
exports.linkUsers = linkUsers;
exports.fmtDate = fmtDate;
exports.MillisecondToDate = MillisecondToDate;
/** 获取标签样式
 *  @param {string} tab Tab分类
 *  @param {bool} good 是否是精华帖
 *  @param {bool} top 是否是置顶帖
 */
function getTabClassName(tab, good, top) {
  var className = "";

  if (top) {
    className = "top";
  } else if (good) {
    className = "good";
  } else {
    switch (tab) {
      case "share":
        className = "share";
        break;
      case "ask":
        className = "ask";
        break;
      case "job":
        className = "job";
        break;
      default:
        className = "default";
    }
  }

  return className;
}

/** 获取title文字
 *  @param {string} tab Tab分类
 */
function getTitleByTab(tab) {
  var title = "";
  switch (tab) {
    case "share":
      title = "分享";
      break;
    case "ask":
      title = "问答";
      break;
    case "job":
      title = "招聘";
      break;
    case "good":
      title = "精华";
      break;
    default:
      title = "全部";
  }
  return title;
}

/** 获取文字标签
 *  @param {string} tab Tab分类
 *  @param {bool} good 是否是精华帖
 *  @param {bool} top 是否是置顶帖
 */
function getTabStr(tab, good, top) {
  var str = "";

  if (top) {
    str = "置顶";
  } else if (good) {
    str = "精华";
  } else {
    switch (tab) {
      case "share":
        str = "分享";
        break;
      case "ask":
        str = "问答";
        break;
      case "job":
        str = "招聘";
        break;
      default:
        str = "暂无";
    }
  }

  return str;
}

/**格式化时间
 *  @param {string} time 需要格式化的时间
 *  @param {bool} friendly 是否是fromNow
 */
function getLastTimeStr(time, friendly) {
  if (friendly) {
    return MillisecondToDate(new Date() - new Date(time));
  } else {
    return fmtDate(new Date(time), "yyyy-MM-dd hh:mm");
  }
}

/**
 * 从文本中提取出@username 标记的用户名数组
 * @param {String} text 文本内容
 * @return {Array} 用户名数组
 */
function fetchUsers(text) {
  if (!text) {
    return [];
  }

  var ignoreRegexs = [/```.+?```/g, // 去除单行的 ```
  /^```[\s\S]+?^```/gm, // ``` 里面的是 pre 标签内容
  /`[\s\S]+?`/g, // 同一行中，`some code` 中内容也不该被解析
  /^    .*/gm, // 4个空格也是 pre 标签，在这里 . 不会匹配换行
  /\b\S*?@[^\s]*?\..+?\b/g, // somebody@gmail.com 会被去除
  /\[@.+?\]\(\/.+?\)/g // 已经被 link 的 username
  ];

  ignoreRegexs.forEach(function (ignore_regex) {
    text = text.replace(ignore_regex, "");
  });

  var results = text.match(/@[a-z0-9\-_]+\b/gim);
  var names = [];
  var map = {};
  if (results) {
    for (var i = 0, l = results.length; i < l; i++) {
      var s = results[i];
      //remove leading char @
      s = s.slice(1);
      if (!map.hasOwnProperty(s)) {
        names.push(s);
        map[s] = true;
      }
    }
  }
  return names;
}

/**
 * 根据文本内容，替换为数据库中的数据
 * @param {String} text 文本内容
 * @param {Function} callback 回调函数
 */
function linkUsers(text) {
  var users = fetchUsers(text);
  for (var i = 0, l = users.length; i < l; i++) {
    var name = users[i];
    text = text.replace(new RegExp("@" + name + "\\b(?!\\])", "g"), "[@" + name + "](/user/" + name + ")");
  }
  return text;
}

/**
 *   对Date的扩展，将 Date 转化为指定格式的String 
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
 */
function fmtDate(date, fmt) {
  //author: meizz
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
}

/**
 * 由于moment库加进来太大了，自定义了formnow函数，待完善阶段
 */
function MillisecondToDate(msd) {
  var time = parseFloat(msd) / 1000;
  var str = "";
  if (null != time && "" != time) {
    if (time > 60 && time < 3600) {
      str = parseInt(time / 60.0) + " 分钟前";
    } else if (time >= 3600 && time < 86400) {
      str = parseInt(time / 3600.0) + " 小时前";
    } else if (time >= 86400 && time < 86400 * 30) {
      str = parseInt(time / 86400.0) + " 天前";
    } else if (time >= 86400 * 30 && time < 86400 * 365) {
      str = parseInt(time / (86400.0 * 30)) + " 个月前";
    } else if (time >= 86400 * 365) {
      str = parseInt(time / (86400.0 * 365)) + " 年前";
    } else {
      str = parseInt(time) + " 秒前";
    }
  }
  return str;
}