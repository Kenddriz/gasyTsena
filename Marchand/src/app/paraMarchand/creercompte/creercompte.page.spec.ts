import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercomptePage } from './creercompte.page';

describe('CreercomptePage', () => {
  let component: CreercomptePage;
  let fixture: ComponentFixture<CreercomptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreercomptePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercomptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
