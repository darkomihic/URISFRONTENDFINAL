import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimService } from 'app/services/tim.service';
import { Tim } from 'app/models/tim';
import { ProjekatService } from 'app/services/projekat.service';
import { Projekat } from 'app/models/projekat';

export interface DialogData {
  nazivProjekta: string;
  opisProjekta: string;
  datumPocetka: Date;
  tipProjekta: string;
  id_tim: string;
}


@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
})
export class CreateProjectDialogComponent implements OnInit{

  teams:Tim[];

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private projekatService: ProjekatService,
    private timService: TimService) {}

  ngOnInit() {
    this.timService.getAllTims().subscribe(teams => {
      this.teams = teams;
      console.log(this.teams);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProject(): void {
    this.projekatService.createProject(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

  

  
}
