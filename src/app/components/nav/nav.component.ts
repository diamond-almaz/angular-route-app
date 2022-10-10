import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { LINKS } from 'src/assets/contants';
import { PAGES } from 'src/assets/types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = LINKS;

  activeLink = PAGES.users;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        this.activeLink =  ev.url.substring(1) as PAGES;
    }
    })
  }

}
