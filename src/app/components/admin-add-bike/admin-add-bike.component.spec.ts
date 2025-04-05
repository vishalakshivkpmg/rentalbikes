import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBikeComponent } from './admin-add-bike.component';

describe('AdminAddBikeComponent', () => {
  let component: AdminAddBikeComponent;
  let fixture: ComponentFixture<AdminAddBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
