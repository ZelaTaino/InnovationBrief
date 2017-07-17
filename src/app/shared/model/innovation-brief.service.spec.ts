import { TestBed, inject } from '@angular/core/testing';

import { InnovationBriefService } from './innovation-brief.service';

describe('InnovationBriefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnovationBriefService]
    });
  });

  it('should be created', inject([InnovationBriefService], (service: InnovationBriefService) => {
    expect(service).toBeTruthy();
  }));
});
