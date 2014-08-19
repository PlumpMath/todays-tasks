import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'task',
  actions: {
    addTask: function() {
      var newTask = this.store.createRecord('task', {
        description: this.get('newDescription'),
      });
      this.set('newDescription', '');
      newTask.save();
    },
  },

});
