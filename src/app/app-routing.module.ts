import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: '**',
    redirectTo: 'personal'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
