import Ember from 'ember';

export default Ember.Component.extend({
  list: null,
  isCreatingList: false,

  actions: {
    createList() {
      this.toggleProperty('isCreatingList');
      this.sendAction('createList');
    },

    cancelCreateList() {
      this.sendAction('cancelCreateList');
    },

    saveList() {
      this.toggleProperty('isCreatingList');
      this.sendAction('saveList');
    }
  }
});
