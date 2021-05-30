import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'agreement',
    loadChildren: () => import('./pages/agreement/agreement.module').then(m => m.AgreementModule),
  },
  {
    path: 'agreement-specification',
    loadChildren: () => import('./pages/agreement-specification/agreement-specification.module').then(m => m.AgreementSpecificationModule),
  },
  {
    path: 'add-agreement',
    loadChildren: () => import('./pages/add-agreement/add-agreement.module').then(m => m.AddAgreementModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
