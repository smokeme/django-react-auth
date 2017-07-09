import { extendObservable } from "mobx";
import uuid from "uuid";

class myStore {
  constructor() {
      extendObservable(this, {
        authenticated: false,
        token: "",
        username: "",
        email: "",
        todos: [],
        articales: [],
        projects: [
          {
            id:uuid.v4(),
            title: 'Business Website',
            category: 'Web Design',
            username: 'ffawaz',
          },
          {
            id:uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development',
            username: 'ffawaz',
          },
          {
            id:uuid.v4(),
            title: 'Ecommerce Shopping Cart',
            category: 'Web Development',
            username: 'ffawaz',
          }
        ],
      }
    )
  }
}
var store = window.store = new myStore()

export default store
