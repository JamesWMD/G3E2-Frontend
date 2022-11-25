import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearValidarUsuarioComponent } from './crear-validar-usuario.component';

describe('CrearValidarUsuarioComponent', () => {
  let component: CrearValidarUsuarioComponent;
  let fixture: ComponentFixture<CrearValidarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearValidarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearValidarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
