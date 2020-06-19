import {NgModule} from '@angular/core';

import {FocusOnErrorDirective} from './focus-on-error.directive';
import {TouchOnErrorDirective} from './touch-on-error.directive';
import {MessageOnErrorDirective} from './message-on-error.directive';
import {SummaryOnErrorDirective} from './summary-on-error.directive';

import {AlertService} from "./alert.service";

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
  ],
  imports: [],
  exports: [
    FocusOnErrorDirective,
    TouchOnErrorDirective,
    MessageOnErrorDirective,
    SummaryOnErrorDirective,
  ],
  providers: [
    AlertService,
  ]
})
export class TahoniLibModule {
}
