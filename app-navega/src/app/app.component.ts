import { Component } from '@angular/core';
import { AppSharedDataService } from './app-shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'navega';
  isLogged = false;

  constructor(private appSharedDataService: AppSharedDataService) {
    this.appSharedDataService?.login$.subscribe((res) => this.isLogged = res);
  }
}
