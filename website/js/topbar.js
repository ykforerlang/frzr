
import { el } from '../../src/index';

import { api } from './api';

var sections = {
  hello: 'Hello',
  features: 'Features'
};

export class Topbar {
  constructor () {
    this.el = el('div', { class: 'topbar' },
      this.menu = el('div', { class: 'topbar-menu' },
        el('div', { class: 'topbar-menuitem' },
          el('i', { class: 'fa fa-bars' }),
          this.current = el('p')
        )
      )
    );
    this.menu.onclick = () => {
      api.trigger('topbar open');
    }
  }
  update (section, subsection) {
    if (!sections[section]) {
      this.current.textContent = '404';
      return;
    }
    this.current.textContent = sections[section];
  }
}