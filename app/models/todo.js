import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  completed: DS.attr('boolean'),

  // Relationships
  list: DS.belongsTo('list')
});
