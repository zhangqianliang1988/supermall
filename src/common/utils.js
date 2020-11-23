/**
 * 防抖函数
 *
 * @param fn
 * @param delay
 * @returns {function(): void}
 */
export function debounce(fn, delay) {
  let timer = null;
  delay = delay || 500;
  return function () {
    let args = arguments;
    let that = this;
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay);
  }
}

/**
 * 节流函数
 *
 * @param fn
 * @param delay
 * @returns {function(): void}
 */
export function throttle(fn, delay) {
  let lastTime;
  let timer;
  delay = delay || 200;
  return function () {
    let args = arguments;
    let nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        lastTime = nowTime;
        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
