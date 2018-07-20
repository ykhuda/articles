import { IArticle } from '../models/article';
import { SET_ARTICLES, ADD_ARTICLE, TOGGLE_TODO, REMOVE_ARTICLE, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
  articles: IArticle[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  articles: [],
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SET_ARTICLES:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.articles),
        lastUpdate: new Date()
      })

    case ADD_ARTICLE:
      action.todo.id = state.articles.length + 1;
      return Object.assign({}, state, {
        articles: state.articles.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      })

    //case TOGGLE_TODO:
    //  var todo = state.articles.find(t => t.id === action.id);
    //  var index = state.articles.indexOf(todo);
    //  return Object.assign({}, state, {
    //    articles: [
    //      ...state.articles.slice(0, index),
    //      Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
    //      ...state.articles.slice(index+1)
    //    ],
    //    lastUpdate: new Date()
    //  })

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

