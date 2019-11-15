import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookPage } from './textbook.page';

describe('TextbookPage', () => {
  let component: TextbookPage;
  let fixture: ComponentFixture<TextbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
