import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { header } from './header-component/header.component'
import { content } from './content-component/content.component'
import { footer } from './footer-component/footer.component'
import {cbox} from './cbox-component/cbox.component'
import {hbox} from './hbox-component/hbox.component'

@NgModule({
  declarations: [
    AppComponent,
    header,
    content,
    footer,
    cbox,
    hbox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
