/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


// Init Vue!
var app = new Vue({
  el: '#demo',
	mounted: function () {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll: function(e) {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
				this.addMoreColors();
      }
    },
    addMoreColors: function() {
      // Simple dummy function to add more data.
      if(this.colors.length<=11)
      this.colors = this.colors.concat([{ hex: "https://games-live.s3.amazonaws.com/game-img/5559.png"},
        { hex: "http://o2tvseries.com/res/tv_serials/61.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/62.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/63.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/64.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/65.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/66.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/67.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/68.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/69.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/70.jpg" }]);
    }
  },
  data: function() {
    return {
      colors: [
        { hex: "http://o2tvseries.com/res/tv_serials/560.jpg"},
        { hex: "http://o2tvseries.com/res/tv_serials/561.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/562.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/563.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/564.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/565.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/566.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/567.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/568.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/569.jpg" },
        { hex: "http://o2tvseries.com/res/tv_serials/570.jpg" }
      ]
    }
  }
})