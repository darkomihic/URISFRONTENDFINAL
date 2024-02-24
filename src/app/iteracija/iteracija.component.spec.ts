import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracijaComponent } from './iteracija.component';

describe('IteracijaComponent', () => {
  let component: IteracijaComponent;
  let fixture: ComponentFixture<IteracijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteracijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
