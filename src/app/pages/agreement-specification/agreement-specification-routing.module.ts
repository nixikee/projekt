import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementSpecificationComponent } from './agreement-specification.component';

const routes: Routes = [
    {
        path: '',
        component: AgreementSpecificationComponent,
        data: { title: 'Agreement Specification' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgreementSpecificationRoutingModule { }
