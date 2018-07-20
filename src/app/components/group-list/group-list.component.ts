import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { SELECTED_GROUP,  REMOVE_ARTICLE } from '../../store/actions';
import { IArticle } from '../../models/article';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @select() articles;
  @select() groups;

  model: IArticle = {
    id: 0,
    isAdded:true,
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

  selectGroup(group){
    this.ngRedux.dispatch({type: SELECTED_GROUP, group: group});
  }
}
