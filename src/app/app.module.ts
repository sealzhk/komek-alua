import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './mypage/main/main.component';
import { EditComponent } from './mypage/edit/edit.component';
import { ChangepassComponent } from './mypage/changepass/changepass.component';
import { HeaderComponent } from './header/header.component';
import { MydonationsComponent } from './mypage/mydonations/mydonations.component';

const routes: Routes = [
  {path: 'mypage', component: MainComponent},
  {path: 'edit', component: EditComponent},
  {path: 'change_password', component: ChangepassComponent},
  {path: 'my_donations', component: MydonationsComponent},
  {path: '', redirectTo: 'mypage', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
    ChangepassComponent,
    HeaderComponent,
    MydonationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
