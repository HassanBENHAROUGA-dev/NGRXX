import { TestBed } from '@angular/core/testing';

import { Event.Driver.ServiceService } from './event.driver.service.service';

describe('Event.Driver.ServiceService', () => {
  let service: Event.Driver.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Event.Driver.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
