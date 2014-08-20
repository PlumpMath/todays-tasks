import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  doneChanged: function() {
    this.get('content').save();
  }.observes('done'),
  actions: {
    updateTask: function() {
      this.get('content').save();
      this.set('isEditing', false);
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
