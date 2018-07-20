import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { NEW_ARTICLE, EDIT_GROUP, SELECTED_GROUP } from '../../store/actions';
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

  model: IArticle =
    {
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
    this.selectedGroup$.subscribe(selectedGroup => this.selectedGroup = selectedGroup);
  }

  backToList(){
    this.ngRedux.dispatch({type: SELECTED_GROUP, group: null});
  }

  editGroupName(){
    //this.ngRedux.dispatch({type: EDIT_GROUP, group: this.selectedGroup});
  }

  addArticle(){
    this.newArticle = true;
  }

  submitArticle(){
    this.ngRedux.dispatch({type: NEW_ARTICLE, group: this.model});
  }
}
