import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    editList() {
      this.toggleProperty('isEditing');
    },

    saveList() {
      this.model.save().then(() => {
        this.toggleProperty('isEditing');
      }, () => {
        console.log('Error saving list');
      });
    },

    deleteList() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('index');
      }, () => {
        console.log('Error while deleting list');
      });
    }
  }
});
