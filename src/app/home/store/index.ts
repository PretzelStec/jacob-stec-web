import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const homeStateFeatureKey = 'homeState';

export interface HomeState {

}

export const reducers: ActionReducerMap<HomeState> = {

};


export const metaReducers: MetaReducer<HomeState>[] = !environment.production ? [] : [];
