import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColaboradorHistorialPage } from './colaborador-historial.page';

describe('ColaboradorHistorialPage', () => {
  let component: ColaboradorHistorialPage;
  let fixture: ComponentFixture<ColaboradorHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradorHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
