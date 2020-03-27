import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarProyectoComponent } from './componentes/registrar-proyecto/registrar-proyecto.component';
import {FormsModule} from '@angular/forms'
import { ProyectoRegistroService } from './servicios_docentes/proyecto-registro.service';
import { RegistroProfesoresComponent } from './componentes/registro-profesores/registro-profesores.component';
import { RegistrarEstudianteComponent } from './componentes/registrar-estudiante/registrar-estudiante/registrar-estudiante.component';
import { IngresarPlataformaComponent } from './componentes/ingreso-plataforma/ingresar-plataforma/ingresar-plataforma.component';
import {RouterModule, Routes} from '@angular/router';
import { IngresoDocentePlataformaComponent } from './componentes/ingreso-docentes/ingreso-docente-plataforma/ingreso-docente-plataforma.component';
import { IngresoEstudiantesPlataformaComponent } from './componentes/ingreso-estudiantes/ingreso-estudiantes-plataforma/ingreso-estudiantes-plataforma.component';
import { FiltroComponent } from './componentes/ingreso-filtro/filtro/filtro.component';
import { VistaDocentesComponent } from './componentes/vista-docentes/vista-docentes/vista-docentes.component';
import { VistaEstudiantesComponent } from './componentes/vista-estudiantes/vista-estudiantes/vista-estudiantes.component';
import { VistaDocenteComponent } from './componentes/vista-docente/vista-docente/vista-docente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const rutasComponentes: Routes = [
  {path: '', component:IngresarPlataformaComponent},
  {path: 'registroDocente', component:RegistroProfesoresComponent},
  {path: 'registroEstudiante', component: RegistrarEstudianteComponent},
  {path: 'registroProyecto', component: RegistrarProyectoComponent},
  {path: 'ingresoDocentePlataforma', component:IngresoDocentePlataformaComponent},
  {path: 'ingresoEstudiantePlataforma', component: IngresoEstudiantesPlataformaComponent},
  {path: 'filtroIngreso',component:FiltroComponent},
  {path: 'vistaDocente',component:VistaDocentesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrarProyectoComponent,
    RegistroProfesoresComponent,
    RegistrarEstudianteComponent,
    IngresarPlataformaComponent,
    IngresoDocentePlataformaComponent,
    IngresoEstudiantesPlataformaComponent,
    FiltroComponent,
    VistaDocentesComponent,
    VistaEstudiantesComponent,
    VistaDocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutasComponentes),
    NgbModule
  ],
  providers: [ProyectoRegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
