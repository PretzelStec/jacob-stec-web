import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { TileComponent } from './home/tile/tile.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
        },
    }),
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
