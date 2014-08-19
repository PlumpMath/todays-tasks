import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'task',
  hideDone: false,
  filteredContent: Ember.computed.defaultTo("content"),
  filterTasks: function() {
    var hideDone = this.get('hideDone');
    this.set('filteredContent', this.get('content').filter(function(model) {
        return hideDone ? !model.get('done') : true;
      })
    );
  }.observes('hideDone', 'content.@each.done'),
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
