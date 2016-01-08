import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    editList() {
      this.toggleProperty('isEditing');
    },

    saveList() {
      // Save list
      this.model.save().then(() => {
        this.toggleProperty('isEditing');
      }, () => {
        console.log('Error saving list');
      });
    },

    deleteList() {
      // Only delete if user confirms
      if(confirm("Deleting a list will delete all it's content. Continue?")) {
        this.model.destroyRecord().then(() => {
          this.transitionToRoute('index');
        }, () => {
          alert('Error while deleting list');
        });
      }
    }
  }
});
