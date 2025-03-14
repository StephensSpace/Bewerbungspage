import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereIamComponent } from './here-iam.component';

describe('HereIamComponent', () => {
  let component: HereIamComponent;
  let fixture: ComponentFixture<HereIamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereIamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HereIamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
