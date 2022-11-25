import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarUnPermisoRolComponent } from './validar-un-permiso-rol.component';

describe('ValidarUnPermisoRolComponent', () => {
  let component: ValidarUnPermisoRolComponent;
  let fixture: ComponentFixture<ValidarUnPermisoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarUnPermisoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarUnPermisoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
