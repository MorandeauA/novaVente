import Vue from 'vue';

Vue.filter('formatDate', function(value) {
  if (value) {
    const date = new Date(value);
    return date.getDate();
  }
});
