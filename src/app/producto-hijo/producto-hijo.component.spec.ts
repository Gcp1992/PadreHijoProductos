import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHijoComponent } from './producto-hijo.component';

describe('ProductoHijoComponent', () => {
  let component: ProductoHijoComponent;
  let fixture: ComponentFixture<ProductoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
