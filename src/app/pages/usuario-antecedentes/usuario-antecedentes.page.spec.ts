import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioAntecedentesPage } from './usuario-antecedentes.page';

describe('UsuarioAntecedentesPage', () => {
  let component: UsuarioAntecedentesPage;
  let fixture: ComponentFixture<UsuarioAntecedentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAntecedentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioAntecedentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
