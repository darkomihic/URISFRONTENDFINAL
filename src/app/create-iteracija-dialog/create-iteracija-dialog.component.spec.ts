import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIteracijaDialogComponent } from './create-iteracija-dialog.component';

describe('CreateIteracijaDialogComponent', () => {
  let component: CreateIteracijaDialogComponent;
  let fixture: ComponentFixture<CreateIteracijaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIteracijaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIteracijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
