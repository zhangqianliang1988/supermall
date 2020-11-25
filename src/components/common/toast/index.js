import Toast from "./Toast";

const toast = {}

toast.install = function (Vue) {
  const toastConstructor = Vue.extend(Toast)
  const tmpToast = new toastConstructor();
  tmpToast.$mount(document.createElement('div'))
  document.body.appendChild(tmpToast.$el)
  Vue.prototype.$toast = tmpToast
}

export default toast
