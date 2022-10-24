import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyQuizComponent } from './key-quiz.component';

describe('KeyQuizComponent', () => {
  let component: KeyQuizComponent;
  let fixture: ComponentFixture<KeyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
