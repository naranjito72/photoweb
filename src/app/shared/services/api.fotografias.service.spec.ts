import { TestBed } from '@angular/core/testing';

import { Api.FotografiasService } from './api.fotografias.service';

describe('Api.FotografiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Api.FotografiasService = TestBed.get(Api.FotografiasService);
    expect(service).toBeTruthy();
  });
});
