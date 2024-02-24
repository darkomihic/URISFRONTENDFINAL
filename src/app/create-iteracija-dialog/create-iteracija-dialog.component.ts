import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IteracijaComponent } from 'app/iteracija/iteracija.component';
import { IteracijaService } from 'app/services/iteracija.service';
import { Iteracija } from 'app/models/iteracija';

export interface DialogData {
  verzijaProjekta: string;
  datumPocetkaIteracije: Date;
  tipIteracije: string;
  id_projekat: string;
}

@Component({
  selector: 'app-create-iteracija-dialog',
  templateUrl: './create-iteracija-dialog.component.html',
  styleUrls: ['./create-iteracija-dialog.component.css']
})
export class CreateIteracijaDialogComponent implements OnInit {
  
  id: string

  constructor(
    public dialogRef: MatDialogRef<CreateIteracijaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private iteracijaService: IteracijaService,
    private iteracija: IteracijaComponent
  ) { }
  ngOnInit(): void {
    this.id=this.iteracija.id;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createIteracija(): void {
    this.data.id_projekat=this.id;
    console.log(this.id);
    this.iteracijaService.createIteracija(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
