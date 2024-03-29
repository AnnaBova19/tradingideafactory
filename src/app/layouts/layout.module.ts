import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './/layout.component';
import { AppHeader } from './/app-header/app-header.component';
import { AppSidebar } from './/app-sidebar/app-sidebar.component';
import { AppFooter } from './/app-footer/app-footer.component';

@NgModule({
	declarations: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	],
	exports: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	],
	imports: [
    CommonModule,
		RouterModule
	]
})
export class LayoutModule {
}