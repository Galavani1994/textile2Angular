import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagementSaleComponent} from '../core/component/management-sale/management-sale.component';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from '../core/component/not-found/not-found.component';
import {CustomerComponent} from '../core/component/customer/customer.component';
import {ReportComponent} from '../core/component/report/report.component';
import {ProductionComponent} from '../core/component/production/production.component';
import {AdminComponent} from '../core/component/admin/admin.component';
import {DashboardComponent} from '../core/component/admin/dashboard/dashboard.component';
import {SignInComponent} from '../core/component/admin/sign-in/sign-in.component';
import {SignUpComponent} from '../core/component/admin/sign-up/sign-up.component';

const routes: Routes = [
    {path: '', component: ManagementSaleComponent},
    {path: 'production', component: ProductionComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'report', component: ReportComponent},
    {
        path: 'admin', component: AdminComponent, children: [
            {path: 'signIn', component: SignInComponent},
            {path: 'dashboard', component: DashboardComponent}
        ]
    },
    {path: 'signUp', component: SignUpComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
