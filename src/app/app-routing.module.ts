import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutmeComponent } from './components/aboutme/editaboutme.component';
import { EditeducacionComponent } from './components/estudios/editeducacion.component';
import { NeweducacionComponent } from './components/estudios/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { NewskillComponent } from './components/skills/newskill.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'login', component: LoginComponent},
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'editexp/:id', component: EditExperienciaComponent},
{path:'nuevaedu', component: NeweducacionComponent},
{path: 'editedu/:id', component: EditeducacionComponent},
{path: 'newskill', component: NewskillComponent},
{path: 'editskill/:id', component: EditskillComponent},
{path: 'editabout/:id', component: EditaboutmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
