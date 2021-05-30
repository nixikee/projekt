import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement.component';

const routes: Routes = [
    {
        path: '',
        component: AgreementComponent,
        data: { title: 'Agreement' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgreementRoutingModule { }
