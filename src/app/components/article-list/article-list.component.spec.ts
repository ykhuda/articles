import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { articleListComponent } from './article-list.component';

describe('articleListComponent', () => {
  let component: articleListComponent;
  let fixture: ComponentFixture<articleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ articleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(articleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
