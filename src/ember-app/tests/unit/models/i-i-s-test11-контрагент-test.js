import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test11-контрагент', 'Unit | Model | i-i-s-test11-контрагент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test11-заказ',
    'model:i-i-s-test11-контрагент',
    'model:i-i-s-test11-состав-заказа',
    'model:i-i-s-test11-сотрудник',
    'model:i-i-s-test11-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
