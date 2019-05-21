import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProduitPage } from './home-produit.page';

describe('HomeProduitPage', () => {
  let component: HomeProduitPage;
  let fixture: ComponentFixture<HomeProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProduitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
