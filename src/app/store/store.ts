import { IArticle } from '../models/article';
import { EDIT_GROUP, SELECTED_GROUP, ARTICLE_TO_GROUP, ADD_GROUP, SET_ARTICLES, REMOVE_ARTICLE} from './actions';
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
  let group;
  let article;

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
      group = state.groups.find(t => t.id === action.group.id);
      group.articles.push(Object.assign({}, action.article));

      if ( action.article.id ==0)
      {
        action.article.id = state.articles.length+1;
      }

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

    case REMOVE_ARTICLE:
      article = state.selectedGroup.articles.find(t => t.id === action.article.id);
      index = state.selectedGroup.articles.indexOf(article);
      state.selectedGroup.articles.splice(index, 1);


      group = state.groups.find(t => t.id === state.selectedGroup.id);
      index = state.groups.indexOf(group);

      return Object.assign({}, state, {
        groups: [
          ...state.groups.slice(0, index),
          Object.assign({}, state.selectedGroup),
          ...state.groups.slice(index + 1)
        ]
      })
  }
  return state;
}

