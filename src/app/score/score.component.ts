import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() score : number = 4;
  @Input() highScore : number = 10;
  @Input() heart : number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
