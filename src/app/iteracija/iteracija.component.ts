import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreateIteracijaDialogComponent } from 'app/create-iteracija-dialog/create-iteracija-dialog.component';
import { Iteracija } from 'app/models/iteracija';
import { IteracijaService } from 'app/services/iteracija.service';
import { EditIteracijaDialogComponent } from 'app/edit-iteracija-dialog/edit-iteracija-dialog.component';

@Component({
  selector: 'app-iteracija',
  templateUrl: './iteracija.component.html',
  styleUrls: ['./iteracija.component.css']
})
export class IteracijaComponent {

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private iteracijaService: IteracijaService) { }

  iteracijas: Iteracija[] = [];
  id: string

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.refreshTable();
  }

  startCreateIteracijaDialog(){
   const dialogRef = this.dialog.open(CreateIteracijaDialogComponent, {
    width:'250px',
      data: {}
   });   

   dialogRef.afterClosed().subscribe(result => {
    this.refreshTable();
  });
  }

  refreshTable() {
    this.iteracijaService.getAllIteracijas().subscribe((data: Iteracija[]) => {
        this.iteracijas = data.filter(item => item.id_projekat === this.id);
    });
}


  editIteracija(iteracija): void{
    const dialogRef = this.dialog.open(EditIteracijaDialogComponent,{
      width: '250px',
      data: iteracija,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.iteracijaService.updateIteracija(result).subscribe(() => {
          this.iteracijaService.getAllIteracijas().subscribe((data: Iteracija[]) => {
            this.iteracijas = data;
          });
        });
      }

    });
  }

  deleteIteracija(iteracija) {
    this.iteracijaService.deleteIteracija(iteracija.id_iteracija).subscribe(() => {
      const index = this.iteracijas.indexOf(iteracija);
      if (index > -1) {
        this.iteracijas.splice(index, 1);
      }
    });
  }

}

