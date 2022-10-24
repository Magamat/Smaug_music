import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { RoundKeysComponent } from './round-keys/round-keys.component';
import { ScoreComponent } from './score/score.component';
import { GoodOrBadComponent } from './good-or-bad/good-or-bad.component';
import { KeyQuizComponent } from './key-quiz/key-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    RoundKeysComponent,
    ScoreComponent,
    GoodOrBadComponent,
    KeyQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
