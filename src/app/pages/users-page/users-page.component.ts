import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { IUser } from 'src/assets/types';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: IUser[] = []

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

}
