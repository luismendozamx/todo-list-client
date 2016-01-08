import Ember from 'ember';

export default Ember.Component.extend({
  todo: null,

  actions: {
    cancelNewTodo() {
      Ember.$('#new-todo-modal').modal('hide');
      this.sendAction('cancelNewTodo');
    },

    saveTodo() {
      this.sendAction('saveTodo');
    }
  }
});
