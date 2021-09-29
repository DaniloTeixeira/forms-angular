import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidenavComponent],
})
export class SharedModule {}
