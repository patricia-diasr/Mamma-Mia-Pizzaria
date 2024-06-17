import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualLineFormComponent } from './virtual-line-form.component';

describe('VirtualLineFormComponent', () => {
  let component: VirtualLineFormComponent;
  let fixture: ComponentFixture<VirtualLineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualLineFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualLineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
