import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressService } from "./progress.service";
import { ActiveViewService } from './active-view.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    ProgressService,
    ActiveViewService
  ]
})
export class ServicesModule { }
