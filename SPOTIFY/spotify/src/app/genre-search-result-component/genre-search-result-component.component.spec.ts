import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSearchResultComponentComponent } from './genre-search-result-component.component';

describe('GenreSearchResultComponentComponent', () => {
  let component: GenreSearchResultComponentComponent;
  let fixture: ComponentFixture<GenreSearchResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreSearchResultComponentComponent]
    });
    fixture = TestBed.createComponent(GenreSearchResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
