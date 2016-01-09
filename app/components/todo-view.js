import Ember from 'ember';

export default Ember.Component.extend({
  todo: null,

  cssClass: Ember.computed('todo.completed', function() {
    if(this.get('todo.completed')) {
      return "panel-success";
    } else {
      return "panel-default";
    }
  }),

  todoStatus: Ember.computed('todo.completed', function() {
    this.send('updateTodo');
  }),

  actions: {
    updateTodo() {
      let todo = this.get('todo');

      if(todo.get('hasDirtyAttributes') && !todo.get('isNew')) {
        todo.save();
      }
    }
  }
});
