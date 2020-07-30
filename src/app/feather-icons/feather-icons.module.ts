import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Video, ShoppingCart, Globe, Menu, ChevronsDown, Radio } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Video,
  ShoppingCart,
  Globe,
  Menu,
  ChevronsDown,
  Radio
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule { }
