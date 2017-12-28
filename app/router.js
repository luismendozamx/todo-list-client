import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('lists', {resetNamespace: true}, function() {
    this.route('show', {path: ':list_id'}, function() {
      this.route('todos', function() {
        this.route('show', {path: ':todo_id'});
      });
    });
  });
});

export default Router;
