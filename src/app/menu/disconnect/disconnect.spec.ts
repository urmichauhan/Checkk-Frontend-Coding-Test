import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disconnect } from './disconnect';

describe('Disconnect', () => {
  let component: Disconnect;
  let fixture: ComponentFixture<Disconnect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disconnect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disconnect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
