import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nav = document.getElementsByName('navbar')!;
  intro = document.getElementById('introduction')!;

  title = 'aset';
}
