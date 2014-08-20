import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:index', 'Controller - IndexController', {
  subject: function(options, factory) {
    return factory.create({
      content: [],
    });
  },
});

test('a new task can be added', function() {
  expect(1);
  var ctrl = this.subject();
  ctrl.set('newDescription', 'new task');
  ctrl.send('addTask');
  equal(ctrl.get('content.length'), 1);
});
