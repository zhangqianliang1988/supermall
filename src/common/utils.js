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
