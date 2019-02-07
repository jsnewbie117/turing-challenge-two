import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalComponent } from './personal/personal.component';
import { EmailComponent } from './email/email.component';
import { MatImportsModule } from './mat-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatImportsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
