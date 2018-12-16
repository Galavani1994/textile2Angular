import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductionComponent} from './production/production.component';
import {CustomerComponent} from './customer/customer.component';
import {ManagementSaleComponent} from './management-sale/management-sale.component';
import {ReportComponent} from './report/report.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextileService} from './textile.service';
import {HttpClientModule} from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



const rout: Routes = [
    {path: '', component: ManagementSaleComponent},
    {path: 'production', component: ProductionComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'report', component: ReportComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductionComponent,
        CustomerComponent,
        ManagementSaleComponent,
        ReportComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(rout),
        HttpClientModule,
        DpDatePickerModule,
        BrowserAnimationsModule
    ],
    providers: [TextileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
