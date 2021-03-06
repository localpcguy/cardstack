import Component from '@ember/component';
import { inject as service } from '@ember/service';

import layout from '../../templates/components/field-editors/cardstack-card-editor';

export default Component.extend({
  tools: service('cardstack-card-picker'),
  layout,

  actions: {
    pickCard() {
      this.tools.pickCard().then((card) => {
        this.set(`content.${this.get('field')}`, card);
      })
    },
    deleteCard() {
      this.set(`content.${this.get('field')}`, null);
    }
  }
});
