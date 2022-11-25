import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRolAUsuarioComponent } from './asignar-rol-a-usuario.component';

describe('AsignarRolAUsuarioComponent', () => {
  let component: AsignarRolAUsuarioComponent;
  let fixture: ComponentFixture<AsignarRolAUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarRolAUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarRolAUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
