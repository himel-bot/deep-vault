import axios from "axios";
import CustomerHeader from "./LandingPage";


var config = require("../../config");

var frontendUrl = "http://" + config.dev.host + ":" + config.dev.port;
var backendUrl =
  "http://" + config.dev.backendHost + ":" + config.dev.backendPort;

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { "Access-Control-Allow-Origin": frontendUrl }
});



export default {
  name: "LandingPageLogic",
  data() {
    return {
      playone: true,
      pauseit: false,
      playtwo: false
    };
  },

  created: function() {
    console.log(this.$router.history.current.path);
  },

  methods: {
    halt: function() {
    //    	this.$refs.myvideo.play();
            console.log(this.playone);
    //      this.isPlaying = true;
            this.playone = false;
            this.freeze = true;
            this.playtwo = false;
            console.log("hello");
        },
        stop: function() {
          	//this.$refs.myvideo.pause();
            //this.isPlaying = false;
            this.playone = false;
            this.freeze = false;
            this.playtwo = true;
        }

  }
};
