import DS from 'ember-data';
//import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	id: attr('string'),
	vpid: attr('string'),
	creator_id: attr('string'),
	name: attr('string'),
	description: attr('string'),
	capacity: attr('string'),
	start_date: attr('string'),
	end_date: attr('string'),
	visibility: attr('string'),
	latitude: attr('string'),
	longitude: attr('string'),
	created_at: attr('string'),
	updated_at: attr('string'),
});
