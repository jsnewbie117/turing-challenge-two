import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class MatImportsModule {}
