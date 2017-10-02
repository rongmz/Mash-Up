import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ActiveViewService } from '../../services';

import { User } from '../../models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  users: User[] = [
    new User('username1', undefined, 'Rounak', new Date(2016, 1, 23)),
    new User('username2', undefined, 'Soma', new Date(2017, 4, 5)),
    new User('username3', undefined, 'Admin', new Date(2016, 5, 3)),
    new User('username4', undefined, 'User 4', new Date(2017, 1, 22)),
    new User('username5', undefined, 'Ron', new Date(2017, 8, 23)),
  ];

  currentUser: User = this.users[0]; // sample current user

  // ---- START:: bug fix "reference template variable inside ngIf" https://github.com/angular/angular/issues/6179
  private userSelectionList: ViewContainerRef;
  @ViewChild('userSelectionList') set userSelectionListSetter(theElementRef: ViewContainerRef) {
    this.userSelectionList = theElementRef;
  }
  // ---- END::  bug fix

  constructor(private activeViewService: ActiveViewService) { }

  ngOnInit() {
    // set current page name
    this.activeViewService.setActiveView('Settings');

  }

  /**
   * Method to bulk delete of users.
   * @param usersToDelete users array to delete
   */
  deleteSelectedUsers(usersToDelete) {
    console.log('list of users to delete =>', usersToDelete);
  }

  /**
   * Opens up add user modal/popup to add user
   */
  addUser() {
    console.log('add user requested');
  }

}
