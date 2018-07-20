import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { REMOVE_ARTICLE, ARTICLE_TO_GROUP,  SELECTED_GROUP } from '../../store/actions';
import {Observable} from "rxjs/Observable";
import {IGroup} from "../../models/groups";
import {IArticle} from "../../models/article";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  @select() selectedGroup$: Observable<IGroup>;

  newArticle:boolean;
  selectedGroup: IGroup;

  model:IArticle;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.selectedGroup$.subscribe(selectedGroup => this.selectedGroup = selectedGroup);
  }

  backToList(){
    this.ngRedux.dispatch({type: SELECTED_GROUP, group: null});
  }

  deleteArticle(article){
    this.ngRedux.dispatch({type: REMOVE_ARTICLE, article: article});
  }
  createNewArticle(event) {
    this.model = {
      id: 0,  
      isAdded: false,
      source: {id: '',name: ''},
      author: '',
      title:  '',
      description:  '',
      url:  '',
      urlToImage:  '',
      publishedAt:  ''
    }
    this.newArticle = true;
  }
  submitArticle() {
    this.newArticle = false;
    this.ngRedux.dispatch({type: ARTICLE_TO_GROUP, group: this.selectedGroup, article: this.model });
  }
}
