import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
  setup: function() {
    App = startApp();
    visit('/');
    fillIn('form.new-task input', 'a new task');
    click('form.new-task button');
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Add a task", function() {
  expect(1);
  equal($.trim(find('ul.tasks li.task:last .task-description').text()), 'a new task',
    'List of tasks contains the new task');
});

test("Mark a task as done", function() {
  expect(1);
  click('ul.tasks li.task:last .task-done').then(function() {
    equal(find('ul.tasks li.task.done:last').length, 1, 'The created task is done');
  });
});

test("Archive completed tasks", function() {
  expect(2);
  ok(find('ul.tasks li.task.done').length >= 1);
  click('button.archive-done');
  equal(find('ul.tasks li.task.done').length, 0);
});

test("Edit a task", function() {
  expect(1);
  $(find('ul.tasks li.task:last .task-description')).dblclick();
  fillIn('ul.tasks li.task:last .task-description input', 'updated text');
  click('ul.tasks li.task:last .task-description button').then(function() {
    equal($.trim(find('ul.tasks li.task:last .task-description').text()), 'updated text',
      'The created task is done');
  });
});
