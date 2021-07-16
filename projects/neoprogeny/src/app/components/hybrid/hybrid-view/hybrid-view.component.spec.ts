import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HybridViewComponent } from './hybrid-view.component';

describe('ViewComponent', () => {
  let component: HybridViewComponent;
  let fixture: ComponentFixture<HybridViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
