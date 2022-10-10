import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from 'src/app/shared/backend.service';
import { IUser } from 'src/assets/types';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  user!: IUser;

  loading = true;

  constructor(private backendService: BackendService, @Inject(MAT_DIALOG_DATA) public data: { id: number}) { }

  ngOnInit(): void {
    this.backendService.getUsersByID(this.data.id).subscribe((user) => {
      this.loading = false;
      this.user = user;
    })
  }

}
