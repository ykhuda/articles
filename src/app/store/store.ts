import { IArticle } from '../models/article';
import { ARTICLE_TO_GROUP, ADD_GROUP, SET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_ALL_TODOS } from './actions';
import {IGroup} from "../models/groups";

export interface IAppState {
  articles: IArticle[];
  groups: IGroup[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  articles: [],
  groups: [],
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SET_ARTICLES:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.articles),
        lastUpdate: new Date()
      })

    case ADD_GROUP:
      action.group.id = state.groups.length + 1;
      return Object.assign({}, state, {
        groups: state.groups.concat(Object.assign({}, action.group)),
        lastUpdate: new Date()
      })

    case ARTICLE_TO_GROUP:
      action.group.id = state.groups.length + 1;
      return Object.assign({}, state, {
        groups: state.groups.concat(Object.assign({}, action.group)),
        lastUpdate: new Date()
      })

    case ADD_ARTICLE:
      action.todo.id = state.articles.length + 1;
      return Object.assign({}, state, {
        articles: state.articles.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      })

    case REMOVE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      })

    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        articles: [],
        lastUpdate: new Date()
      })
  }
  return state;
}

