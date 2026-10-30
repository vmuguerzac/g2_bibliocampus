import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrosCatalogo } from './filtros-catalogo';

describe('FiltrosCatalogo', () => {
  let component: FiltrosCatalogo;
  let fixture: ComponentFixture<FiltrosCatalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosCatalogo],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosCatalogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
