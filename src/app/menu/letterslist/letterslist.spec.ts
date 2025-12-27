import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersList } from './letterslist';

describe('Letter', () => {
  let component: LettersList;
  let fixture: ComponentFixture<LettersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
