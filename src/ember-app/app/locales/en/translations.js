import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest11ЗаказLForm from './forms/i-i-s-test11-заказ-l';
import IISTest11КонтрагентLForm from './forms/i-i-s-test11-контрагент-l';
import IISTest11СотрудникLForm from './forms/i-i-s-test11-сотрудник-l';
import IISTest11ТоварыLForm from './forms/i-i-s-test11-товары-l';
import IISTest11ЗаказEForm from './forms/i-i-s-test11-заказ-e';
import IISTest11КонтрагентEForm from './forms/i-i-s-test11-контрагент-e';
import IISTest11СотрудникEForm from './forms/i-i-s-test11-сотрудник-e';
import IISTest11ТоварыEForm from './forms/i-i-s-test11-товары-e';
import IISTest11ЗаказModel from './models/i-i-s-test11-заказ';
import IISTest11КонтрагентModel from './models/i-i-s-test11-контрагент';
import IISTest11СоставЗаказаModel from './models/i-i-s-test11-состав-заказа';
import IISTest11СотрудникModel from './models/i-i-s-test11-сотрудник';
import IISTest11ТоварыModel from './models/i-i-s-test11-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test11-заказ': IISTest11ЗаказModel,
    'i-i-s-test11-контрагент': IISTest11КонтрагентModel,
    'i-i-s-test11-состав-заказа': IISTest11СоставЗаказаModel,
    'i-i-s-test11-сотрудник': IISTest11СотрудникModel,
    'i-i-s-test11-товары': IISTest11ТоварыModel
  },

  'application-name': 'Test11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test11',
          title: 'Test11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test11: {
          caption: 'Test11',
          title: 'Test11',
          'i-i-s-test11-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test11-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test11-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-test11-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test11-заказ-l': IISTest11ЗаказLForm,
    'i-i-s-test11-контрагент-l': IISTest11КонтрагентLForm,
    'i-i-s-test11-сотрудник-l': IISTest11СотрудникLForm,
    'i-i-s-test11-товары-l': IISTest11ТоварыLForm,
    'i-i-s-test11-заказ-e': IISTest11ЗаказEForm,
    'i-i-s-test11-контрагент-e': IISTest11КонтрагентEForm,
    'i-i-s-test11-сотрудник-e': IISTest11СотрудникEForm,
    'i-i-s-test11-товары-e': IISTest11ТоварыEForm
  },

});

export default translations;
