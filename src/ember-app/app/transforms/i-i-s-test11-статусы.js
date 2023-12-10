import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-test11-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.Test11.Статусы'
});
