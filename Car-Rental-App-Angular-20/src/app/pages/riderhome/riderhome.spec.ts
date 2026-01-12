import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Riderhome } from './riderhome';

describe('Riderhome', () => {
  let component: Riderhome;
  let fixture: ComponentFixture<Riderhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Riderhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Riderhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
