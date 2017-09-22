import { NgModule } from '@angular/core';
import {
    MdButtonModule, 
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    // MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    // MdExpansionModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTooltipModule
} 
from '@angular/material';

@NgModule({
  imports: [
      MdButtonModule, 
      MdCheckboxModule,
      MdIconModule,
      MdInputModule,
      MdSelectModule,
    //   MdMenuModule,
      MdSidenavModule,
      MdToolbarModule,
      MdListModule,
    //   MdExpansionModule,
      MdProgressSpinnerModule,
      MdProgressBarModule,
      MdTooltipModule
    ],
  exports: [
      MdButtonModule, 
      MdCheckboxModule,
      MdIconModule,
      MdInputModule,
      MdSelectModule,
    //   MdMenuModule,
      MdSidenavModule,
      MdToolbarModule,
      MdListModule,
    //   MdExpansionModule,
      MdProgressSpinnerModule,
      MdProgressBarModule,
      MdTooltipModule
    ],
})
export class NgMaterialModule { }