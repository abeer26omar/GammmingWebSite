import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    windowScrolled = false;

  constructor() { }
  
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
        this.windowScrolled = window.pageYOffset !== 0;
      });
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
