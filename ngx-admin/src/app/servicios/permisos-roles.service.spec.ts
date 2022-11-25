import { TestBed } from '@angular/core/testing';

import { PermisosRolesService } from './permisos-roles.service';

describe('PermisosRolesService', () => {
  let service: PermisosRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
