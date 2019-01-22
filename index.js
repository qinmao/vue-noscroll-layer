;
(function () {
    let noScroll = {}
    noScroll.install = function (Vue) {
        Vue.directive('noScroll', {
            update(el, binding) {
                let show = binding.value.showLayer,
                  parentEl = binding.value.parentEl;
                if (show) {
                  el.addEventListener("touchmove", function(event) {
                    event.preventDefault();
                  });
                  if (parentEl) {
                    import BScroll from "better-scroll";
                    new BScroll(document.getElementById(parentEl));
                  }
                } else {
                  el.removeEventListener("touchmove", function(event) {
                    event.preventDefault();
                  });
                }
              }
        })

    }
    if (typeof exports === 'object') {
        module.exports = noScroll
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return noScroll
        })
    } else if (window.Vue) {
        window.noScroll = noScroll
        Vue.use(noScroll)
    }
})()