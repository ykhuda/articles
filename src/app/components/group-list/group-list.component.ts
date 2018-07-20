import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { ADD_ARTICLE, REMOVE_ARTICLE, TOGGLE_TODO } from '../../store/actions';
import { IArticle } from '../../models/article';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @select() articles;

  model: IArticle = {
    id: 0,

  source: {
    id: '',
    name: ''
  },
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  obSubmit() {
    this.ngRedux.dispatch({type: ADD_ARTICLE, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_ARTICLE, id: todo.id });
  }
}
