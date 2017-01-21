import DS from 'ember-data';
//import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	id: attr('number'),
	user_id: attr('string'),
	first_name: attr('string'),
	last_name: attr('string'),
	birthday: attr('rdate'),
	search_radius: attr('number'),
	gender: attr('string'),
	created_at: attr('rdate'),
	updated_at: attr('rdate'),
});
