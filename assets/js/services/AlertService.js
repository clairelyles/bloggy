// add AlertService to a controller (HomeCtrl) injecting it & creating functions. And add it to Alerts.js by injecting it and
// In order for the controller (HomeCtrl) and directive (alerts.js) to communicate,
// were using AlertService.js to tie them to geter
myBlogApp.factory('AlertService',[function() {

  // to add and remove alerts from this array
  var alerts = [];

  return {
    clear: function() {
      alerts = [];
    },
    // pass through type & text to communicate
    // then push the type & text content into alerts array
    add: function(type,text) {
      alerts.push({typte:type,text:text});
    },
    remove: function(idx) {
      alerts.splice(idx,1);
    },
    get:function(){
      return alerts;
    }
  };

}])