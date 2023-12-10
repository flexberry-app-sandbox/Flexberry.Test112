import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-test11-заказ-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-заказ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-test11-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-сотрудник-l.title'),
            children: null
          }, {
            link: 'i-i-s-test11-товары-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-товары-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-test11-контрагент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-test11-контрагент-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})