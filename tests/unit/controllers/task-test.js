import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:task', 'Controller - TaskController', {
  subject: function(options, factory) {
    return factory.create({
      // TODO: create store object
      content: {},
    });
  },
});

test('done is falsy', function() {
  expect(1);
  var ctrl = this.subject();
  equal(!!ctrl.get('done'), false);
});

test('done is delegated to content', function() {
  expect(1);
  var ctrl = this.subject();
  ctrl.set('content.done', true);
  equal(ctrl.get('done'), true);
});

test('toggleDone chahnges done', function() {
  expect(1);
  var ctrl = this.subject();

  // TODO: remove this once store is setup
  ctrl.set('content', {
    save: function() {},
  });

  var done = ctrl.get('done');
  ctrl.send('toggleDone');
  equal(!done, ctrl.get('done'));
});
