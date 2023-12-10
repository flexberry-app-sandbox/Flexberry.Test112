import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗ: DS.attr('number'),
  статус: DS.attr('i-i-s-test11-статусы'),
  контрагент: DS.belongsTo('i-i-s-test11-контрагент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test11-сотрудник', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-test11-состав-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗ: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.кодЗ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-test11-заказ.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-test11-заказ', {
    кодЗ: attr('Код З', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Контрагент', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-test11-состав-заказа', 'Состав заказа', {
      товары: belongsTo('i-i-s-test11-товары', '', {
        название: attr('', { index: 1 }),
        ценаЗаЕд: attr('', { index: 2 })
      }, { index: 0 }),
      количество: attr('', { index: 3 }),
      стоимость: attr('', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-test11-заказ', {
    кодЗ: attr('Код З', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    сотрудник: belongsTo('i-i-s-test11-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    контрагент: belongsTo('i-i-s-test11-контрагент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
