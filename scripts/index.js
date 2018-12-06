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
      this.colors = this.colors.concat([{ hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7515.png"},
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7503.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7499.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7519.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7507.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7476.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7473.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7455.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7439.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7466.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7451.png" }]);
    }
  },
  data: function() {
    return {
      colors: [
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7443.png"},
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7495.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7436.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7433.jpg" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7463.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7401.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7398.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7429.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7426.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7418.png" },
        { hex: "https://s3-eu-west-1.amazonaws.com/games-live/game-img/7414.png" }
      ]
    }
  }
})