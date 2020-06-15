import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioSintomasPage } from './usuario-sintomas.page';

describe('UsuarioSintomasPage', () => {
  let component: UsuarioSintomasPage;
  let fixture: ComponentFixture<UsuarioSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
