import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromarticles from './articles';

export interface State {
    articles: fromarticles.State;
}

export const reducers: ActionReducerMap<State> = {
    articles: fromarticles.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getarticleState = createFeatureSelector<fromarticles.State>('articles');

export const getarticles = createSelector(
    getarticleState,
    fromarticles.getarticles,
);

export const getSelected = createSelector(
    getarticleState,
    fromarticles.getSelected,
);

export const getSelectedarticle = createSelector(
    getSelected,
    getarticles,
    (selectedId, articles) => {
        return {
            ...articles[selectedId]
        };
    }
);

export const getAllarticles = getarticles;