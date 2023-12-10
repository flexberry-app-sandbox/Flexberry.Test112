import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test11-заказ-l');
  this.route('i-i-s-test11-заказ-e',
  { path: 'i-i-s-test11-заказ-e/:id' });
  this.route('i-i-s-test11-заказ-e.new',
  { path: 'i-i-s-test11-заказ-e/new' });
  this.route('i-i-s-test11-контрагент-l');
  this.route('i-i-s-test11-контрагент-e',
  { path: 'i-i-s-test11-контрагент-e/:id' });
  this.route('i-i-s-test11-контрагент-e.new',
  { path: 'i-i-s-test11-контрагент-e/new' });
  this.route('i-i-s-test11-сотрудник-l');
  this.route('i-i-s-test11-сотрудник-e',
  { path: 'i-i-s-test11-сотрудник-e/:id' });
  this.route('i-i-s-test11-сотрудник-e.new',
  { path: 'i-i-s-test11-сотрудник-e/new' });
  this.route('i-i-s-test11-товары-l');
  this.route('i-i-s-test11-товары-e',
  { path: 'i-i-s-test11-товары-e/:id' });
  this.route('i-i-s-test11-товары-e.new',
  { path: 'i-i-s-test11-товары-e/new' });
});

export default Router;
