;
(function () {
    let vNoScroll = {}
    import BScroll from "better-scroll";
    vNoScroll.install = function (Vue) {
        Vue.directive('noScroll', {
            update(el, binding) {
                let show = binding.value.showLayer,
                  parentEl = binding.value.parentEl;
                if (show) {
                  el.addEventListener("touchmove", function(event) {
                    event.preventDefault();
                  });
                  if (parentEl) {
                    
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
        module.exports = vNoScroll
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return vNoScroll
        })
    } else if (window.Vue) {
        window.vNoScroll = vNoScroll
        Vue.use(vNoScroll)
    }
})()