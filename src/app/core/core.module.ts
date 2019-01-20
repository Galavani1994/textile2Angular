import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserStorageService} from './browser-storage.service';
import {Error} from 'tslint/lib/error';
import {HeaderComponent} from './component/header/header.component';
import {APP_CONFIG, AppConfig} from './services/app.config';
import {AuthService} from './services/auth.service';
import {ManagementSaleComponent} from './component/management-sale/management-sale.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {ProductionComponent} from './component/production/production.component';
import {ReportComponent} from './component/report/report.component';
import {CustomerComponent} from './component/customer/customer.component';
import {AdminComponent} from './component/admin/admin.component';
import {SignUpComponent} from './component/admin/sign-up/sign-up.component';
import {SignInComponent} from './component/admin/sign-in/sign-in.component';
import {DashboardComponent} from './component/admin/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, HttpClientModule,
        DpDatePickerModule, BrowserAnimationsModule],
    exports: [HeaderComponent, ProductionComponent, CustomerComponent, ManagementSaleComponent, ReportComponent,
        AdminComponent, SignUpComponent, SignInComponent, DashboardComponent, NotFoundComponent],
    declarations: [HeaderComponent, ProductionComponent, CustomerComponent, ManagementSaleComponent, ReportComponent,
        AdminComponent, SignUpComponent, SignInComponent, DashboardComponent, NotFoundComponent],
    providers: [
        BrowserStorageService,
        AuthService,
        {provide: APP_CONFIG, useValue: AppConfig}
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error('CoreModule should be imported ONLY in AppModule.');
        }
    }
}
