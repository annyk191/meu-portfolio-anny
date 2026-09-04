import { Routes } from '@angular/router';

import { SobreComponent } from './features/sobre/sobre';
import { ObjetivoComponent } from './features/objetivo-profissional/objetivo-profissional';
import { FormacaoComponent } from './features/formacao-academica/formacao-academica';
import { HabilidadesComponent } from './features/habilidades/habilidades';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full'
  },

  {
    path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'objetivo',
    component: ObjetivoComponent
  },

  {
    path: 'formacao',
    component: FormacaoComponent
  },

  {
    path: 'habilidades',
    component: HabilidadesComponent
  }

];