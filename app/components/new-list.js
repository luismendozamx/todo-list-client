import Ember from 'ember';

export default Ember.Component.extend({
  list: null,
  isCreatingList: false,

  actions: {
    createList() {
      this.toggleProperty('isCreatingList');
      this.sendAction('createList');
    },

    saveList() {
      if(this.get("list.title")) {
        this.toggleProperty('isCreatingList');
        this.sendAction('saveList');
      } else {
        alert("Title can't be blank");
      }
    }
  }
});
