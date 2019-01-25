let vNoScroll = {}
vNoScroll.install = function (Vue) {
    Vue.directive('no-scroll', function (el, binding) {
        let show = binding.value.showLayer,
            parentEl = binding.value.parentEl;
        if (show) {
            el.addEventListener("touchmove", function (event) {
                event.preventDefault();
            });
            if (parentEl) {
                // 按需加载引入
                // default 输出接口，可以用参数直接获得,使用具名输入的形式
                import('better-scroll').then(({
                    default: BScroll
                }) => {
                    new BScroll(document.getElementById(parentEl));
                })
            }
        } else {
            el.removeEventListener("touchmove", function (event) {
                event.preventDefault();
            });
        }
    })
}
export default vNoScroll;