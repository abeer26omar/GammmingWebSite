import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  streams: number = 0;
  twitch: number = 0;
  youtube: number = 0;
  team: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
