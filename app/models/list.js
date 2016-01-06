import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),

  // Relationships
  todos: DS.hasMany('todos', {async: false})
});
