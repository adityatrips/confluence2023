import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  constructor() {}

  sidebarOpen: boolean = window.innerWidth >= 1024 ? false : true;

  toggleSidebar() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
      document.getElementById('dropdown')!.style.display = 'block';
      document.getElementById('dropdown')!.style.opacity = '1';
    } else if (!this.sidebarOpen) {
      this.sidebarOpen = true;
      document.getElementById('dropdown')!.style.display = 'none';
      document.getElementById('dropdown')!.style.opacity = '0';
    }
    console.log(this.sidebarOpen);
  }

  checkForScroll(): void {
    if (!(window.scrollY < 50)) {
      document.getElementById('navbar')!.style.backgroundColor = '#232032';
      document.getElementById('navbar')!.style.zIndex = '999';
    } else {
      document.getElementById('navbar')!.style.backgroundColor = 'transparent';
      document.getElementById('navbar')!.style.zIndex = '999';
    }
  }

  nav(url: string) {
    window.open(
      'https://onedrive.live.com/?cid=008e92141623e2c0&id=8E92141623E2C0%21598&ithint=album&authkey=%21AHG7Ene158FBlUE&v=photos',
      '_blank'
    );
  }

  interval = window.setInterval(this.checkForScroll, 100);

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
