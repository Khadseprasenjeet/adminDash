import { Component } from '@angular/core';
import {VERSION} from '@angular/material/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isNextVersion = location.hostname === 'next.material.angular.io';
  version = VERSION.full;
  year = new Date().getFullYear();
}
