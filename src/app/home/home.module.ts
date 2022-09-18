import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import * as fromHomeState from './store';
import { TileComponent } from './tile/tile.component';



@NgModule({
  declarations: [
    HomeComponent,
    TileComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHomeState.homeStateFeatureKey, fromHomeState.reducers, { metaReducers: fromHomeState.metaReducers })
  ]
})
export class HomeModule { }
