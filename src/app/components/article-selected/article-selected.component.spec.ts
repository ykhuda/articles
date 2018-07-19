import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { articleSelectedComponent } from './article-selected.component';

describe('articleSelectedComponent', () => {
  let component: articleSelectedComponent;
  let fixture: ComponentFixture<articleSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ articleSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(articleSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
