import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditBikeComponent } from './admin-edit-bike.component';

describe('AdminEditBikeComponent', () => {
  let component: AdminEditBikeComponent;
  let fixture: ComponentFixture<AdminEditBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
