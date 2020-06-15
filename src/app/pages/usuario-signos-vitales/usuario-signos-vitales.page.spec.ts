import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioSignosVitalesPage } from './usuario-signos-vitales.page';

describe('UsuarioSignosVitalesPage', () => {
  let component: UsuarioSignosVitalesPage;
  let fixture: ComponentFixture<UsuarioSignosVitalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSignosVitalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioSignosVitalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
