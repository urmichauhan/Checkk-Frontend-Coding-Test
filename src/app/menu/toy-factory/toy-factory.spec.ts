import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFactory } from './toy-factory';

describe('ToyFactory', () => {
  let component: ToyFactory;
  let fixture: ComponentFixture<ToyFactory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyFactory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyFactory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
