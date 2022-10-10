import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/assets/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user!: IUser;

  @Output() clickMoreInfo: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onMoreInfo() {
    this.clickMoreInfo.emit(this.user.id)
  }

}
