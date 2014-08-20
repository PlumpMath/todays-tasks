import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    updateTask: function() {
      this.get('content').save();
      this.set('isEditing', false);
    },
    toggleDone: function() {
      this.toggleProperty('done');
      this.get('content').save();
    },
    toggleEdit: function() {
      this.toggleProperty('isEditing');
    },
    removeTask: function(task) {
      task.set('archived', true);
      task.save();
      return true;
    },
  },
});
