import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:index', 'Unit - IndexRoute', {
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
  var route = this.subject();
  var model = {id: 1};
  route.store.find = function(type) {
    return [model];
  };

  equal(route.model(), [model], 'did not correctly find model');
});
