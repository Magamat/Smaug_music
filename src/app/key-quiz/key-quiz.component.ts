import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-key-quiz',
  templateUrl: './key-quiz.component.html',
  styleUrls: ['./key-quiz.component.scss']
})
export class KeyQuizComponent implements OnInit {

  quiz : Note[] = [];
  position : number = 0;
  score: number = 0;
  highScore: number = 0;
  sheetSize: number = 4;
  heart: number = 3; 
  endGame: boolean = false;
  feedbacks: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.quiz = this.generateRandomNewQuiz(4);
  }


  reactToKey(key : string) {
    // console.log("In react to key :", key);
    if (key === this.quiz[this.position].getFrenchName()) {
      this.goodReaction()
    } else  {
      this.badReaction();
    }
  }

  badReaction() {
    this.decreaseHeart();
    this.feedbacks[this.position] = false;
    if(this.heart == 0) {
      this.gameOver()
    }
  }

  gameOver() {
    this.endGame = true;
  }

  decreaseHeart() {
    if(this.heart > 0 ) {
      this.heart--;
    }
  }

  goodReaction() {
    this.increaseScore();
    this.feedbacks[this.position] = true;
    this.increasePosition();
  }

  increasePosition() {
    this.position++;
    if (this.position >= this.sheetSize) {
      this.quiz = this.generateRandomNewQuiz(4);
      this.feedbacks = [];
      this.position = 0;
      this.increaseHeart();
    }
  }

  increaseHeart() {
    if(this.heart <= 5 ) {
      this.heart++;
    }
  }

  increaseScore() {
    this.score++;
    if(this.score > this.highScore) {
      this.highScore = this.score;
    }
  }

  // generateNewQuiz(amplitude : number): Note[] {
  //   let quiz : Note[] = []

  //   for (let i = 1; i <= amplitude; i++) {
  //     let note = new Note(i);
  //     quiz.push(note);
  //   }

  //   return quiz; 
  // }

  generateRandomNewQuiz(amplitude : number): Note[] {
    let quiz : Note[] = new Array();

    for (let i = 1; i <= this.sheetSize; i++) {
      let note = new Note( this.getRandomInt(amplitude) + 1);
      quiz.push(note);
    }
    return quiz; 
  }

  getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }



}


