import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiaDetalleComponent } from './fotografia-detalle.component';

describe('FotografiaDetalleComponent', () => {
  let component: FotografiaDetalleComponent;
  let fixture: ComponentFixture<FotografiaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografiaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografiaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
