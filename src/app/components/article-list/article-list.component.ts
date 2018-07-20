import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { ARTICLE_TO_GROUP, ADD_GROUP, TOGGLE_TODO } from '../../store/actions';
import { IGroup } from '../../models/groups';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @select() articles;
  @select() groups;

  groupSelects = [];

  addToGroup: boolean = false;
  newGroup: boolean = false;
  selectedArticle;
  selectedGroup;

  model: IGroup = {
    id: 0,
    name: '',
    articles:  []
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  selectGroup(group){
    this.newGroup = false;
    this.selectedGroup = group;
  }

  submitGroup() {
    this.newGroup = false;
    this.ngRedux.dispatch({type: ADD_GROUP, group: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id });
  }

  articleToGroup(article) {
    this.addToGroup = true;
    this.selectedArticle = article;
  }

  createNewGroup(event) {
    this.newGroup = true;
  }

  pushToGroup(event) {
    this.ngRedux.dispatch({type: ARTICLE_TO_GROUP, group: this.selectedGroup, article: this.selectedArticle });

    this.selectedGroup = null;
    this.addToGroup = false;
  }
}
