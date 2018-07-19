import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { articleItemComponent } from './article-item.component';

describe('articleItemComponent', () => {
  let component: articleItemComponent;
  let fixture: ComponentFixture<articleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ articleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(articleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
