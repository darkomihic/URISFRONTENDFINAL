import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamDialogComponent } from 'app/create-team-dialog/create-team-dialog.component';
import { EditTeamDialogComponent } from 'app/edit-team-dialog/edit-team-dialog.component';
import { TimService } from 'app/services/tim.service';
import { Tim } from 'app/models/tim';
@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent {

  constructor(public dialog: MatDialog, private timService: TimService) { }
  tims: Tim[] = [];
  ngOnInit() {
    this.timService.getAllTims().subscribe((data: Tim[]) => {
      this.tims = data;
    });
  }

  startCreateTimDialog(){
    const dialogRef = this.dialog.open(CreateTeamDialogComponent, {
      width:'250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  refreshTable() {
    this.timService.getAllTims().subscribe((data: Tim[]) => {
      this.tims = data;
    });
  }

  editTim(tim): void{
    const dialogRef = this.dialog.open(EditTeamDialogComponent,{
      width: '250px',
      data: tim,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.timService.updateTim(result).subscribe(() => {
          // Handle successful update, for example, refresh the table
          this.timService.getAllTims().subscribe((data: Tim[]) => {
            this.tims = data;
          });
        });
      }

    });
  }

  deleteTim(tim) {
    this.timService.deleteTim(tim.id_tim).subscribe(() => {
      // Handle successful delete, for example, refresh the table
      const index = this.tims.indexOf(tim);
      if (index > -1) {
        this.tims.splice(index, 1);
      }
    });
  }
}
