import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {LoginComponent} from './login/login.component'
import {TabsComponent} from './tabs/tabs.component'
import {HomeComponent} from './home/home.component'
import {SettingComponent} from './settings/setting.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent,LoginComponent,TabsComponent,HomeComponent,SettingComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
