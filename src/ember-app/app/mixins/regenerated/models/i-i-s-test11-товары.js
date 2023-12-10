import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТовара: DS.attr('number'),
  количество: DS.attr('number'),
  название: DS.attr('string'),
  ценаЗаЕд: DS.attr('decimal')
});

export let ValidationRules = {
  кодТовара: {
    descriptionKey: 'models.i-i-s-test11-товары.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-test11-товары.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test11-товары.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-test11-товары.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-test11-товары', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    ценаЗаЕд: attr('Цена за ед', { index: 2 }),
    количество: attr('Количество', { index: 3 })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-test11-товары', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    ценаЗаЕд: attr('Цена за ед', { index: 2 }),
    количество: attr('Количество', { index: 3 })
  });
};
