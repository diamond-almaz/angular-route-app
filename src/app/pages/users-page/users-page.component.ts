import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';
import { IUser } from 'src/assets/types';
import {MatDialog} from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/components/user-modal/user-modal.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [MatDialog]
})
export class UsersPageComponent implements OnInit {

  users: IUser[] = []

  loading = true;

  constructor(
    public dialog: MatDialog,
    private backendService: BackendService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.backendService.getUsers().subscribe((users) => {
      this.loading = false;
      this.users = users;
    })

    this.activatedRoute.queryParams.subscribe(({id}) => {
      if (id) {
        this.dialog.open(UserModalComponent, {
          data: {
            id: Number(id),
          },
        });
      }
    })

    this.dialog.afterAllClosed.subscribe(() => {
      this.router.navigate(this.activatedRoute.snapshot.url)
    })
  }

  openUserModal(id: number) {
    this.router.navigate(this.activatedRoute.snapshot.url, {
      queryParams: {
        id
      }
    })
  }

}
