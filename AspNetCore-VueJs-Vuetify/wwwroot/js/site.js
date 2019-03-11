let mixins = [];

if (mix != undefined) {
    mixins.push(mix);
}

var vue = new Vue({
    mixins: mixins,
    el: '#app',
});