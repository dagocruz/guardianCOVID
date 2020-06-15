import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidenteAntecedentesPage } from './residente-antecedentes.page';

describe('ResidenteAntecedentesPage', () => {
  let component: ResidenteAntecedentesPage;
  let fixture: ComponentFixture<ResidenteAntecedentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteAntecedentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidenteAntecedentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
