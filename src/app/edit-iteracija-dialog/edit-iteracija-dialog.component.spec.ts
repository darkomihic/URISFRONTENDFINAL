import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIteracijaDialogComponent } from './edit-iteracija-dialog.component';

describe('EditIteracijaDialogComponent', () => {
  let component: EditIteracijaDialogComponent;
  let fixture: ComponentFixture<EditIteracijaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIteracijaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIteracijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
