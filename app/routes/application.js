import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('list');
  },

  actions: {
    createList() {
      this.controller.set('newList', this.store.createRecord('list'));
    },

    saveList() {
      let newList = this.controller.get('newList');

      newList.save().then(() => {
        this.controller.set('newList', null);
        this.transitionTo('lists.show.todos', newList);
      }, () => {
        console.log('Error saving list');
      });
    }
  }
});
