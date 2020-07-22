import { PopoverCodigoColoresComponent } from './components/popover-codigo-colores/popover-codigo-colores.component';
import { AyudaAntecedenteComponent } from './components/ayuda-antecedente/ayuda-antecedente.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { Storage, IonicStorageModule } from "@ionic/storage";
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';


export function jwtOptionsFactory(storage){
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:3000','192.168.1.73:3000','159.65.71.190','159.65.71.190:3000', 'inger.cicese.mx', 'guardiancovid.cicese.mx/']
  }
}

@NgModule({
  declarations: [AppComponent, AyudaAntecedenteComponent, PopoverCodigoColoresComponent],
  entryComponents: [AyudaAntecedenteComponent, PopoverCodigoColoresComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
