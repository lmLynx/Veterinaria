import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RecetaComponent } from './components/receta/receta.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'mascotas', component: MascotaComponent },
  { path: 'veterinarios', component: VeterinarioComponent },
  { path: 'consultas', component: ConsultaComponent },
  { path: 'recetas', component: RecetaComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
