import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMayorVotacionPorMesaComponent } from './listar-mayor-votacion-por-mesa.component';

describe('ListarMayorVotacionPorMesaComponent', () => {
  let component: ListarMayorVotacionPorMesaComponent;
  let fixture: ComponentFixture<ListarMayorVotacionPorMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMayorVotacionPorMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMayorVotacionPorMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
