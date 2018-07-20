import { IArticle } from '../models/article';
import { SELECTED_GROUP, ARTICLE_TO_GROUP, ADD_GROUP, SET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_ALL_TODOS } from './actions';
import {IGroup} from "../models/groups";
import { createSelector } from 'reselect';

export interface IAppState {
  articles: IArticle[];
  groups: IGroup[];
  selectedGroup: IGroup;
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  articles: [],
  groups: [],
  selectedGroup: null,
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SET_ARTICLES:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.articles)
      })

    case ADD_GROUP:
      action.group.id = state.groups.length + 1;
      return Object.assign({}, state, {
        groups: state.groups.concat(Object.assign({}, action.group))
      })

    case ARTICLE_TO_GROUP:
      let group = state.groups.find(t => t.id === action.group.id);
      group.articles.push(Object.assign({}, action.article));

      var index = state.groups.indexOf(group);

      return Object.assign({}, state, {
        groups: [
          ...state.groups.slice(0, index),
          Object.assign({}, group),
          ...state.groups.slice(index + 1)
        ]
      })

    case SELECTED_GROUP:
      let selectedGroup:IGroup = action.group ? Object.assign({}, action.group) : null;
      return Object.assign({}, state, {
        selectedGroup: selectedGroup
      })

    case ADD_ARTICLE:
      action.todo.id = state.articles.length + 1;
      return Object.assign({}, state, {
        articles: state.articles.concat(Object.assign({}, action.todo))
      })

    case REMOVE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.filter(t => t.id !== action.id)
      })

    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        articles: []
      })
  }
  return state;
}

