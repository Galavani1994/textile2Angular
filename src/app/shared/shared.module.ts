import {ModuleWithProviders, NgModule} from '@angular/core';
import {TextileService} from '../core/services/textile.service';
import {ManagementsaleService} from '../core/services/managementsale.service';
import {Title} from '@angular/platform-browser';
import {UserService} from '../core/services/user.service';

@NgModule({
    imports: [],
    entryComponents: [],
    declarations: [],
    exports: []
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [TextileService, ManagementsaleService, Title, UserService]
        };
    }
}
