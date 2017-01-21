import DS from 'ember-data';
//import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	id: attr('number'),
	upid: attr('string'),
	username: attr('string'),
	email: attr('string'),
	password: attr('string'),
	status: attr('string'),
	socket_id: attr('string'),
	last_active: attr('rdate'),
	created_at: attr('rdate'),
	updated_at: attr('rdate'),
});
