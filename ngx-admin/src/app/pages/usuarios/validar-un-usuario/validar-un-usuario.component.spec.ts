import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarUnUsuarioComponent } from './validar-un-usuario.component';

describe('ValidarUnUsuarioComponent', () => {
  let component: ValidarUnUsuarioComponent;
  let fixture: ComponentFixture<ValidarUnUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarUnUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarUnUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
