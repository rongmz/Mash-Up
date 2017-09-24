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
    MdTooltipModule,
    MdCardModule
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
      MdTooltipModule,
      MdCardModule
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
      MdTooltipModule,
      MdCardModule
    ],
})
export class NgMaterialModule { }