import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:index', 'Route - IndexRoute', {
  subject: function(options, factory) {
    return factory.create({
      store: { }
    });
  }
});

test('things are ok', function() {
  expect(1);
  var route = this.subject();
  ok(route);
});

test('it queries for tasks', function() {
  expect(1);
  var route = this.subject();
  route.store.find = function(type) {
    equal(type, 'task');
  };
  route.model();
});
