// app/routes/todos.js

// This is the TODOS ROUTE, it is invoked when '/todos' is visited.
// Routes are used to load models based on information from the URL.
// Routes also handle actions related to loaded models or to URLs (such as transitions)

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { text: "Create Ember App" },
      { text: "Read Ember Igniter" },
      { text: "Master Ember" }, 
    ]
  }
});
