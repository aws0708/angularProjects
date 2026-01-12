import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagelayout } from './homepagelayout';

describe('Homepagelayout', () => {
  let component: Homepagelayout;
  let fixture: ComponentFixture<Homepagelayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepagelayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepagelayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
