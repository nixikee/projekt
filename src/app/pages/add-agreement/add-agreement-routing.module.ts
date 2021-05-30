import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgreementComponent } from './add-agreement.component';

const routes: Routes = [
    {
        path: '',
        component: AddAgreementComponent,
        data: { title: 'New Agreement' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddAgreementRoutingModule { }
