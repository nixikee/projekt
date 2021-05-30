import { Component } from '@angular/core';
import { NAV } from './../../shared/database/nav.database';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  navs = NAV;

  constructor() { }
}
