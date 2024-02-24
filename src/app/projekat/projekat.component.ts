import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjekatService } from 'app/services/projekat.service';
import { Projekat } from 'app/models/projekat';
import { Tim } from 'app/models/tim';
import { TimService } from 'app/services/tim.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectDialogComponent } from 'app/edit-project-dialog/edit-project-dialog.component';
import { CreateProjectDialogComponent } from 'app/create-project-dialog/create-project-dialog.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.scss']
})
export class ProjekatComponent {


  constructor(public dialog: MatDialog, private projekatService: ProjekatService, private timService: TimService, private router: Router) { }
  projects: Projekat[] = [];
  tims: Tim[] = [];

  ngOnInit() {
    this.projekatService.getAllProjects().subscribe((data: Projekat[]) => {
      this.projects = data;
    });

    this.timService.getAllTims().subscribe((data1: Tim[]) => {
      this.tims = data1;
    });

    
  }

  getTeamName(id: string): string {
    const team = this.tims.find(tim => tim.id_tim === id);
    return team ? team.nazivTim : 'N/A';  // replace 'Name' with the actual property for team name
   
  }

  startCreateProjectDialog() {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '250px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }



  editProject(project): void {
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '250px',
      data: project,
    });
    

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projekatService.updateProject(result).subscribe(() => {
          // Handle successful update, for example, refresh the table
          this.projekatService.getAllProjects().subscribe((data: Projekat[]) => {
            this.projects = data;
          });
        });
      }

    });
    
  }
  deleteProject(project) {
    this.projekatService.deleteProject(project.id_projekat).subscribe(() => {
      // Handle successful delete, for example, refresh the table
      const index = this.projects.indexOf(project);
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    });
  }

  refreshTable() {
    // Re-fetch the data from the server
    this.projekatService.getAllProjects().subscribe((data: Projekat[]) => {
      // Update the projects array
      this.projects = data;
    });
  }
  
  viewProjectIterations(project) {
    this.router.navigate(['iteracija', project.id_projekat]);
}

  
  


  }
