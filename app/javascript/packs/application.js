// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

import TurbolinksAdapter from "vue-turbolinks";
import Vue from "vue";
import App from "../app.vue";

import vuetify from "../plugins/vuetify";
import "../src/posts";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

Vue.use(TurbolinksAdapter);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    vuetify,
    el: "#app",
    data: () => {
      return {
        message: "Vue is loaded!",
      };
    },
    components: { App },
  });
  console.log(app);
});
