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
      let group = state.groups.find(t => t.id === action.group.id);
      group.articles.concat(Object.assign({}, action.article));

      var index = state.groups.indexOf(group);

      return Object.assign({}, state, {
        groups: [
          ...state.groups.slice(0, index),
          Object.assign({}, group),
          ...state.groups.slice(index+1)
        ],
        lastUpdate: new Date()
      })


    /*case ARTICLE_TO_GROUP:
      let group = state.groups.find(t => t.id === action.group.id);
      group.articles.concat(Object.assign({}, action.article));

      return Object.assign({}, state, {
        groups: state.groups.concat(Object.assign({}, action.group)),
        lastUpdate: new Date()
      })*/

    /*case TOGGLE_TODO:
      var todo = state.todos.find(t => t.id === action.id);
      var index = state.todos.indexOf(todo);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
          ...state.todos.slice(index+1)
        ],
        lastUpdate: new Date()
      })*/

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

