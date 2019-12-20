import Vue from 'vue'

Vue.directive('font', {
  bind(el, binding, vnode) {
    el.style.fontSize = binding.value + 'px'
  }
})
Vue.directive('width', {
  bind(el, binding, vnode) {
    el.style.width = binding.value + 'px'
  }
})

Vue.directive('mwidth', {
  bind(el, binding, vnode) {
    el.style.maxWidth = binding.value + 'px'
  }
})
