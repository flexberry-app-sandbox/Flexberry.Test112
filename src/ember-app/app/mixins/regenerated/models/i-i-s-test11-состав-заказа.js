import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  стоимость: DS.attr('decimal'),
  товары: DS.belongsTo('i-i-s-test11-товары', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-test11-заказ', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-test11-состав-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-test11-состав-заказа.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-test11-состав-заказа.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test11-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-test11-состав-заказа', {
    товары: belongsTo('i-i-s-test11-товары', 'Название', {
      название: attr('Название', { index: 0 }),
      ценаЗаЕд: attr('Цена', { index: 1 })
    }, { index: -1, hidden: true }),
    количество: attr('Количесвто', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });
};
