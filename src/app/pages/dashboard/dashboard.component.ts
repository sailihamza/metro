import { Component, OnInit } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sanitizer: DomSanitizer) {}
}


