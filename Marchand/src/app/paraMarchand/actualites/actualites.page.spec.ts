import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesPage } from './actualites.page';

describe('ActualitesPage', () => {
  let component: ActualitesPage;
  let fixture: ComponentFixture<ActualitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
