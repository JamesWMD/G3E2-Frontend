import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecificoComponent } from './listar-especifico.component';

describe('ListarEspecificoComponent', () => {
  let component: ListarEspecificoComponent;
  let fixture: ComponentFixture<ListarEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEspecificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
