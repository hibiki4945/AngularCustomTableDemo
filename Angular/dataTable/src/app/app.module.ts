import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule }

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableModule } from './usersTable/usersTable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersTableModule // 自作テーブル
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
