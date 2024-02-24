import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjekatComponent } from './projekat/projekat.component';
import { EditProjectDialogComponent } from './edit-project-dialog/edit-project-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { EditTeamDialogComponent } from './edit-team-dialog/edit-team-dialog.component';
import { CreateTeamDialogComponent } from './create-team-dialog/create-team-dialog.component';
import { TimComponent } from './tim/tim.component';
import { IteracijaComponent } from './iteracija/iteracija.component';
import { CreateIteracijaDialogComponent } from './create-iteracija-dialog/create-iteracija-dialog.component';
import { EditIteracijaDialogComponent } from './edit-iteracija-dialog/edit-iteracija-dialog.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    NoopAnimationsModule,
    MatInputModule,
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProjekatComponent,
    EditProjectDialogComponent,
    CreateProjectDialogComponent,
    EditTeamDialogComponent,
    CreateTeamDialogComponent,
    TimComponent,
    IteracijaComponent,
    CreateIteracijaDialogComponent,
    EditIteracijaDialogComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
