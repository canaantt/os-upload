import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FilesComponent } from './files/files.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilesComponent,
    NavbarComponent,
    PermissionsComponent,
    ProjectsComponent,
    ProjectDashboardComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
