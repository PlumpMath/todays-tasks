import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    toggleDone: function() {
      this.toggleProperty('done');
      this.get('model').save();
    },
  },
});
