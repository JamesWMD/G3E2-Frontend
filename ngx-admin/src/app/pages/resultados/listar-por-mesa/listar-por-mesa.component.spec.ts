import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPorMesaComponent } from './listar-por-mesa.component';

describe('ListarPorMesaComponent', () => {
  let component: ListarPorMesaComponent;
  let fixture: ComponentFixture<ListarPorMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPorMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPorMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
