import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductionComponent} from './production/production.component';
import {CustomerComponent} from './customer/customer.component';
import {ManagementSaleComponent} from './management-sale/management-sale.component';
import {ReportComponent} from './report/report.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TextileService} from './textile.service';
import {HttpClientModule} from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {ManagementsaleService} from './managementsale.service';
import {FocusDirective} from './focus.directive';
import {AdminComponent} from './admin/admin.component';
import {SignUpComponent} from './admin/sign-up/sign-up.component';
import {SignInComponent} from './admin/sign-in/sign-in.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';



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
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductionComponent,
        CustomerComponent,
        ManagementSaleComponent,
        ReportComponent,
        AdminComponent,
        SignUpComponent,
        SignInComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        DpDatePickerModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule
    ],
    providers: [TextileService, ManagementsaleService, Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
