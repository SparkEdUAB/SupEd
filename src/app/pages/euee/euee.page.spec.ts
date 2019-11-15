import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EUEEPage } from './euee.page';

describe('EUEEPage', () => {
  let component: EUEEPage;
  let fixture: ComponentFixture<EUEEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EUEEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EUEEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
