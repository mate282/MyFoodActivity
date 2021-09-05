import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import {LoginComponent} from './login/login.component'
import {TabsComponent} from './tabs/tabs.component'
import { HomeComponent } from './home/home.component'
import {SettingComponent} from './settings/setting.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login',component:LoginComponent},
  { path: 'tabs',component:TabsComponent, children:[
    { path: 'home', component: HomeComponent, outlet: 'tabsOutlet'},
    { path: 'setting', component: SettingComponent, outlet: 'tabsOutlet'}
  ] },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
