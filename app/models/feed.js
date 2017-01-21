import DS from 'ember-data';
//import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
	user_id: attr('string'),
	venture_id: attr('string'),
	post_date: attr('rdate'),
	created_at: attr('rdate'),
	updated_at: attr('rdate'),
});
