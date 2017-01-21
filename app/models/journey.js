import DS from 'ember-data';
//import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	id: attr('number'),
	jpid: attr('string'),
	creator_id: attr('string'),
	name: attr('string'),
	image: attr('string'),
	description: attr('string'),
	visibility: attr('string'),
	created_at: attr('rdate'),
	updated_at: attr('rdate'),
});
