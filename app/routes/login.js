import Ember from 'ember';

const {
  Route,
  // inject,
  // get,
  // ENV,
  // $
} = Ember;

export default Route.extend({
  //defaults

  //service injections
  //i18n: inject.service(),

  //single line CPs

  //mult line CPs

  //observers

  //Lifecycle hooks
  beforeModel: function() {
    // var errors = {};
    // var labels = {};
    // $.ajax({
    //   url: ENV.SERVER_URL+"/res/errors.txt",
    //   translations: {},
    //   success: (r) => {
    //     r = r.split('\n');
    //     r.forEach((err) => {
    //       err = err.split("=");
    //       if(err.length > 1) {
    //         // the underscore is a hack as I18n does not like numerical keys -v
    //         errors["Errors."+err[0]] = err[1].replace(/\{([0-9]?)\}/g, "{{_$1}}");
    //       }
    //     });
    //     get(this, 'i18n').addTranslations('en', errors);
    //   }
    // });

    // $.ajax({
    //   url: ENV.SERVER_URL+"/res/labels.txt",
    //   success: (r) => {
    //     r = r.split('\n');
    //     r.forEach((lbl) => {
    //       lbl = lbl.split("=");
    //       if(lbl.length > 1) {
    //         // the underscore is a hack as I18n does not like numerical keys -v
    //         labels["Labels."+lbl[0]] = lbl[1].replace(/\{([0-9]?)\}/g, "{{_$1}}");
    //       }
    //     });
    //     get(this, 'i18n').addTranslations('en', labels);
    //   }
    // });
  },

  model: function() {
  },

  setupController: function() {
  }

  //actions

  //methods

});
