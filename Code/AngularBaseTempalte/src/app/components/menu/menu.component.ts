import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuVisability: boolean = false;
  menuItems: { icon: string, text: string, url: string }[] = [
    { "icon": "../assets/AGD.svg",  "text": "Home page",        "url": "/" },
    { "icon": "../assets/AGD.svg",  "text": "User management",  "url": "/users" },
    { "icon": "../assets/AGD.svg",  "text": "Disable alerts",   "url": "/login" }
  ];

  constructor() {
    const actualWidth = window.innerWidth;
  }

  ngOnInit() {
  }

}
