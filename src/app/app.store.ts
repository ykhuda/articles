import {article, List} from './models/article';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()

export class AppStore {
    articles: Observable<article[]>;
    lists: Observable<List[]>;
    
    private static instance: AppStore = null;

    // Return the instance of the service
    public static getInstance(): AppStore {
        if (AppStore.instance === null) {
            AppStore.instance = new AppStore();
        }
        return AppStore.instance;
    }
    constructor() {
        
      }
}