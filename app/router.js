import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('lists', {resetNamespace: true}, function() {
    this.route('show', {path: ':list_id'}, function() {
      this.route('todos', function() {
        this.route('show', {path: ':todo_id'})
      });
    });
  });
});

export default Router;
