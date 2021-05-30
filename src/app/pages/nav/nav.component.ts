import { Component, Input } from '@angular/core';
import { NAV } from './../../shared/database/nav.database';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  nav = NAV;

  constructor() { }

}
