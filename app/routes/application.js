import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },

  actions: {
    createList() {
      // Create list record in controller
      this.controller.set('newList', this.store.createRecord('list'));
    },

    saveList() {
      // Get list from controller
      let newList = this.controller.get('newList');

      // Save list
      newList.save().then(() => {
        this.controller.set('newList', null);
        this.transitionTo('lists.show.todos', newList);
      }, () => {
        alert('Error saving list');
      });
    }
  }
});
