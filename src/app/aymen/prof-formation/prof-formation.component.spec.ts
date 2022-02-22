import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFormationComponent } from './prof-formation.component';

describe('ProfFormationComponent', () => {
  let component: ProfFormationComponent;
  let fixture: ComponentFixture<ProfFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
