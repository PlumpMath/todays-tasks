import DS from 'ember-data';


var Task = DS.Model.extend({
  description: DS.attr('string'),
  done: DS.attr('boolean', {defaultValue: false}),
});

Task.reopenClass({
  FIXTURES: [
    {id: 1, done: false, description: "take out the trash"},
    {id: 2, done: true, description: "do programming exercise"},
  ],
});

export default Task;
