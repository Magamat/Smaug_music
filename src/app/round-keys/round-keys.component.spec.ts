import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundKeysComponent } from './round-keys.component';

describe('RoundKeysComponent', () => {
  let component: RoundKeysComponent;
  let fixture: ComponentFixture<RoundKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
