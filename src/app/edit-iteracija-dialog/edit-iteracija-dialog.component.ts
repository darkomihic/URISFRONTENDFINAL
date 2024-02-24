import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditTeamDialogComponent } from 'app/edit-team-dialog/edit-team-dialog.component';
import { Iteracija } from 'app/models/iteracija';
import { Tim } from 'app/models/tim';
import { IteracijaService } from 'app/services/iteracija.service';

export interface DialogData {
  id_iteracija: string;
  verzijaProjekta: string;
  datumPocetkaIteracije: Date;
  tipIteracije: string;
  id_projekat: string;
}

@Component({
  selector: 'app-edit-iteracija-dialog',
  templateUrl: './edit-iteracija-dialog.component.html',
  styleUrls: ['./edit-iteracija-dialog.component.css']
})
export class EditIteracijaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iteracija,
    private iteracijaService: IteracijaService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateIteracija(): void {
    this.iteracijaService.updateIteracija(this.data).subscribe(() => {
    this.dialogRef.close();
  });
}
}
