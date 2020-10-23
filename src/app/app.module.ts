import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from '@components/header/header.module';
import { MenuModule } from '@components/menu/menu.module';
import { GridModule } from '@components/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, MenuModule, GridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
