import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecificaComponent } from './listar-especifica.component';

describe('ListarEspecificaComponent', () => {
  let component: ListarEspecificaComponent;
  let fixture: ComponentFixture<ListarEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEspecificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
