import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтрагентMixin
} from '../mixins/regenerated/models/i-i-s-test11-контрагент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтрагентMixin, Validations, {
});

defineProjections(Model);

export default Model;
