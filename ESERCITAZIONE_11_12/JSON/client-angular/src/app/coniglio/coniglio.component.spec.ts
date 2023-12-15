import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConiglioComponent } from './coniglio.component';

describe('ConiglioComponent', () => {
  let component: ConiglioComponent;
  let fixture: ComponentFixture<ConiglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConiglioComponent]
    });
    fixture = TestBed.createComponent(ConiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
