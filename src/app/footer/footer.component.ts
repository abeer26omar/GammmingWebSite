import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';

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
    // setTimeout(() => window.scroll(0, 0), 0);
    // this.viewport.Scrol
 }
 
}
