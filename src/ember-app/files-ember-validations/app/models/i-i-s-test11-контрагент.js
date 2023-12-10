import {
  defineNamespace,
  defineProjections,
  Model as КонтрагентMixin
} from '../mixins/regenerated/models/i-i-s-test11-контрагент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтрагентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
