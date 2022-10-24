import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodOrBadComponent } from './good-or-bad.component';

describe('GoodOrBadComponent', () => {
  let component: GoodOrBadComponent;
  let fixture: ComponentFixture<GoodOrBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodOrBadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodOrBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
