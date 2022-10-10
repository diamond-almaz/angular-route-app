import { Component } from '@angular/core';
import { BackendService } from './shared/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-route-app';

  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
  }
}
