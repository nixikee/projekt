import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'agreement',
                loadChildren: () => import('./../agreement/agreement.module').then(m => m.AgreementModule),
            },
            {
                path: 'agreement-specification',
                loadChildren: () => import('./../agreement-specification/agreement-specification.module').then(m => m.AgreementSpecificationModule),
            },
            {
                path: 'add-agreement',
                loadChildren: () => import('./../add-agreement/add-agreement.module').then(m => m.AddAgreementModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
