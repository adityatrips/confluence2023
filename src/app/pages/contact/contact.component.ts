import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  copy(number: string) {
    navigator.clipboard.writeText(number);
  }

  ngOnInit(): void {}
}
