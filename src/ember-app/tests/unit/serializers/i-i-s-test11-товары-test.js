import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test11-товары', 'Unit | Serializer | i-i-s-test11-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test11-товары',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test11-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
