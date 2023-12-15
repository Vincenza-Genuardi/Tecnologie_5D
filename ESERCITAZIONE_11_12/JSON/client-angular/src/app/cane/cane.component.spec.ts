import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaneComponent } from './cane.component';

describe('CaneComponent', () => {
  let component: CaneComponent;
  let fixture: ComponentFixture<CaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaneComponent]
    });
    fixture = TestBed.createComponent(CaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
