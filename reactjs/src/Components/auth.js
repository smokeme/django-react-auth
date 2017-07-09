import $ from "jquery";
import {
  observer
} from "mobx-react";
import store from '../Store.js';
const auth = observer(new class auth {
  login(username, pass) {
    if (localStorage.token && store.username !== "") {
      store.token = localStorage.token
      store.authenticated = true
      store.username = localStorage.username
      return
    }
    this.getToken(username, pass)
  }

  logout() {
    delete localStorage.token
    delete localStorage.username
    store.authenticated = false
    store.token = ""
    store.username = ""
  }
  firstLoad(){
    if (localStorage.token) {
      store.token = localStorage.token
      store.authenticated = true
      if (store.username === ""){
        $.ajax({

          url: "http://fawaz.online/users/i",
          dataType: "json",
          headers: {
                    'Authorization': 'Token ' + localStorage.token
          },
          cache: false,
          success: function(data) {
            store.username = data.username
            store.email = data.email
          }.bind(this),
          error: function(xhr, status, err) {
            console.log(err);
          }
        });
      }
    }
  }
  loggedIn() {
    return !!localStorage.token
  }

  getToken(username, pass) {
    var request = $.ajax({
        type: 'POST',
        datatype: 'application/json',
        url: 'http://fawaz.online/obtain-auth-token/',
        data: {
          username: username,
          password: pass
        },
        success: function(res) {
          store.authenticated = true
          store.token = res.token
          localStorage.token = res.token
          $.ajax({

            url: "http://fawaz.online/users/i",
            dataType: "json",
            headers: {
                      'Authorization': 'Token ' + localStorage.token
            },
            cache: false,
            success: function(data) {
              store.username = data.username
              store.email = data.email
            }.bind(this),
            error: function(xhr, status, err) {
              console.log(err);
            }
          });
        }
      })
      request.fail(function(e){
        console.log(e)
      })

    }
  })
var Auth = window.auth = auth
export default Auth
