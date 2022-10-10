import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';
import { BREED_LIST } from 'src/assets/types';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss']
})
export class DogsPageComponent implements OnInit {

  breeds = Object.values(BREED_LIST);

  selected: BREED_LIST = this.breeds[0];

  pictureUrl: string = '';

  loading = true;

  constructor(private backendService: BackendService, private router: Router, private activateRoute: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ breed }) => {
      if (breed === undefined) {
        this.routerNavigate(this.breeds[0])
      } else {
        this.selected = breed;
        this.getDogPictureByBreed()
      }
    })
  }

  routerNavigate(breed: BREED_LIST) {
    this.router.navigate([`/${this.activateRoute.snapshot.url[0]}/${breed}`])
  }

  selectBreed(ev: MatSelectChange) {
    this.routerNavigate(ev.value);
  }

  getDogPictureByBreed() {
    this.backendService.getDogPictureByBreed(this.selected).subscribe((data) => {
      this.pictureUrl = data.message;
    })
  } 

}
