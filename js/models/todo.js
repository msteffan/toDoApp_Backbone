var app = app || {}

app.Todo = Backbone.Model.extend({

    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      completed: false
    },

    // Toggle the `completed` state of this todo item--can be set and simultaneously persisted
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    }

  });
