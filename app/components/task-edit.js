import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  attributeBindings: ['action', 'value', 'isEditing'],
  didInsertElement: function() {
    this.$('input').focus();
  },
  actions: {
    submit: function() {
      this.sendAction();
    },
    cancel: function() {
      this.set('isEditing', false);
    },
  },
});
