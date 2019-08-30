import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubCategoriaComponent } from './registro-sub-categoria.component';

describe('RegistroSubCategoriaComponent', () => {
  let component: RegistroSubCategoriaComponent;
  let fixture: ComponentFixture<RegistroSubCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSubCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
