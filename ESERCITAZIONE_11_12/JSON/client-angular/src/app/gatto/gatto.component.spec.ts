import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GattoComponent } from './gatto.component';

describe('GattoComponent', () => {
  let component: GattoComponent;
  let fixture: ComponentFixture<GattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GattoComponent]
    });
    fixture = TestBed.createComponent(GattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
