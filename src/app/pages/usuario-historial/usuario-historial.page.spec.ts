import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioHistorialPage } from './usuario-historial.page';

describe('UsuarioHistorialPage', () => {
  let component: UsuarioHistorialPage;
  let fixture: ComponentFixture<UsuarioHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
