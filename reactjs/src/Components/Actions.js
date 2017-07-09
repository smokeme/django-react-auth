import store from '../Store.js';
import $ from "jquery";

export default function () {
  if (store.articales.length < 1) {
  $.ajax({

    url: "http://fawaz.online/articales/",
    dataType: "json",
    headers: {
              'Authorization': 'Token ' + localStorage.token
    },
    cache: false,
    success: function(data) {
      console.log(data);
      store.articales = data;
    },
    error: function(xhr, status, err) {
      console.log(err);
    }
  })
}
}
