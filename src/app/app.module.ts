import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/component/header/header.component';
import {ProductionComponent} from './core/component/production/production.component';
import {CustomerComponent} from './core/component/customer/customer.component';
import {ManagementSaleComponent} from './core/component/management-sale/management-sale.component';
import {ReportComponent} from './core/component/report/report.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TextileService} from './core/services/textile.service';
import {HttpClientModule} from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {ManagementsaleService} from './core/services/managementsale.service';
import {FocusDirective} from './focus.directive';
import {AdminComponent} from './admin/admin.component';
import {SignUpComponent} from './admin/sign-up/sign-up.component';
import {SignInComponent} from './admin/sign-in/sign-in.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {UserService} from './core/services/user.service';
import {NotFoundComponent} from './core/component/not-found/not-found.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        DpDatePickerModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        AppRoutingModule,
        AuthenticationModule,
        CoreModule,
        SharedModule.forRoot(),
        PdfViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
