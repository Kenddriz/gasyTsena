import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutablePage } from './menutable.page';

describe('MenutablePage', () => {
  let component: MenutablePage;
  let fixture: ComponentFixture<MenutablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
