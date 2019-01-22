let vNoScroll = {}
import BScroll from "better-scroll";
vNoScroll.install = function (Vue) {
    Vue.directive('no-scroll', function (el, binding) {
        let show = binding.value.showLayer,
            parentEl = binding.value.parentEl;
        if (show) {
            el.addEventListener("touchmove", function (event) {
                event.preventDefault();
            });
            if (parentEl) {
                new BScroll(document.getElementById(parentEl));
            }
        } else {
            el.removeEventListener("touchmove", function (event) {
                event.preventDefault();
            });
        }
    })
}
export default vNoScroll;