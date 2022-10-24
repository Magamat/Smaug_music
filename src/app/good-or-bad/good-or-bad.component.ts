import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-good-or-bad',
  templateUrl: './good-or-bad.component.html',
  styleUrls: ['./good-or-bad.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class GoodOrBadComponent implements OnInit {

  @Input()
  feedbacks: boolean[] = [];


  results : string[] = ['✅', '✅', '❌'];
  constructor() { }

  ngOnInit(): void {

  }

  ngChange()
  {
  }

}
