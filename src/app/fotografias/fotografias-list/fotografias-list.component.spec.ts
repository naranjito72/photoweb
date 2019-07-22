import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiasListComponent } from './fotografias-list.component';

describe('FotografiasListComponent', () => {
  let component: FotografiasListComponent;
  let fixture: ComponentFixture<FotografiasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografiasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografiasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
