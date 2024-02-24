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
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
})
export class EditProjectDialogComponent implements OnInit{


  tims:Tim[];

  constructor(
    public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Projekat,
    private projekatService: ProjekatService,
    private timService: TimService) {}
    ngOnInit() {
      
      this.timService.getAllTims().subscribe(tims => {
        this.tims = tims;
        console.log(this.tims);
      });
      

    }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProject(): void {
    // Your update logic here
    // For example, you might call a method from your ProjekatService to update the project on the server
    this.projekatService.updateProject(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
