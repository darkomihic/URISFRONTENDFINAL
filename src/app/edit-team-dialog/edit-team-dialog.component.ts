import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimService } from 'app/services/tim.service';
import { Tim } from 'app/models/tim';

export interface DialogData {
  nazivTim: string;
  datumFormiranjaTim: string;
  tipTima: string;
}

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrls: ['./edit-team-dialog.component.css']
})
export class EditTeamDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tim,
    private timService: TimService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTeam(): void {
      this.timService.updateTim(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  

}
