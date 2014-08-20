import DS from 'ember-data';


var Task = DS.Model.extend({
  archived: DS.attr('boolean', {defaultValue: false}),
  description: DS.attr('string'),
  done: DS.attr('boolean', {defaultValue: false}),
});

Task.reopenClass({
  FIXTURES: [
    {id: 1, done: false, description: "take out the trash"},
    {id: 2, done: true, description: "do programming exercise"},
    {id: 3, done: true, description: "make the bed"},
    {id: 4, done: true, description: "go on a hike"},
    {id: 5, done: false, description: "make lunch"},
    {id: 6, done: true, description: "call car insurance"},
    {id: 7, done: false, description: "learn a new spanish word"},
    {id: 8, done: true, description: "go climbing"},
  ],
});

export default Task;
