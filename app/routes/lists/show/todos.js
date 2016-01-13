import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showTodoModal() {
      // Get list model from parent route
      let list = this.modelFor('lists/show');

      // Create empty todo that belongs to list
      this.controller.set('newTodo', this.store.createRecord('todo', {
        list: list
      }));

      // Show modal
      Ember.$('#new-todo-modal').modal('show');
    },

    cancelNewTodo() {
      // Get todo from controller
      let todo = this.controller.get('newTodo');

      // Destroy record from store
      todo.destroyRecord();

      // Set property to null in controller
      this.controller.set('newTodo', null);
    },

    saveTodo() {
      // Get todo from controller
      let todo = this.controller.get('newTodo');

      todo.save().then(() => {
        // Hide modal
        Ember.$('#new-todo-modal').modal('hide');

        // Set property to null in controller
        this.controller.set('newTodo', null);
      }, () => {
        alert('Error while saving todo');
      });
    },

    updateTodo(todo) {
      // Update todo
      todo.save();
    },

    deleteTodo(todo) {
      todo.destroyRecord().then(() => {
        console.log('Todo deleted');
      }, () => {
        alert('Error while deleting todo');
      });
    }
  }
});
