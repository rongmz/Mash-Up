import { NgModule } from '@angular/core';
import { SimpleDialogsService } from './simple-dialogs.service';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgMaterialModule } from "../ng-material";
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { ChoiceDialogComponent } from './choice-dialog/choice-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMaterialModule,

  ],
  declarations: [
    AlertDialogComponent, 
    ConfirmDialogComponent, 
    PromptDialogComponent, 
    ChoiceDialogComponent],
  providers: [SimpleDialogsService],
  exports: [
    SimpleDialogsService,
  ]
})
export class SimpleDialogsModule { }
