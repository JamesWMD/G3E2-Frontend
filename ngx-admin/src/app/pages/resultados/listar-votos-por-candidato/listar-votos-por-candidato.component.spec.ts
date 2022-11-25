import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVotosPorCandidatoComponent } from './listar-votos-por-candidato.component';

describe('ListarVotosPorCandidatoComponent', () => {
  let component: ListarVotosPorCandidatoComponent;
  let fixture: ComponentFixture<ListarVotosPorCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVotosPorCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVotosPorCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
