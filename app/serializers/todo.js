import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeBelongsTo(snapshot, json, relationship) {
    let key = relationship.key;
    let id = snapshot.belongsTo(key).id;

    json['list_id'] = Number(id);
    json['list'] = null;
  }
});
