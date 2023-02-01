import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers:[TestService],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  constructor(tService:TestService) {
    this.name = tService.name;
  }
}

bootstrapApplication(App);
