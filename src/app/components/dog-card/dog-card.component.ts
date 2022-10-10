import { Component, Input, OnInit } from '@angular/core';
import { BREED_LIST } from 'src/assets/types';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  @Input() breed!: BREED_LIST;
  @Input() pictureUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
