import { Action } from '@ngrx/store';
import { article } from '../../models';

export const SELECT = '[articles] Select';
export const ADD_ONE = '[articles] Add One';

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;

    constructor(public payload: article) { }
}

export type Action = AddOne | Select;


