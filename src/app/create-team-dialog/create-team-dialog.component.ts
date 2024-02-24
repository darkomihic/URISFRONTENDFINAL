import { Component, Inject, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimService } from 'app/services/tim.service';


export interface DialogData {
  nazivTim: string;
  datumFormiranjaTim: string;
  tipTima: string;
}

@Component({
  selector: 'app-create-team-dialog',
  templateUrl: './create-team-dialog.component.html',
  styleUrls: ['./create-team-dialog.component.css']
})
export class CreateTeamDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private timService: TimService
  ) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  createTim(): void {
    this.timService.createTim(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
