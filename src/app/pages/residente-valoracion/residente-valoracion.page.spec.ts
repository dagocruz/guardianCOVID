import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidenteValoracionPage } from './residente-valoracion.page';

describe('ResidenteValoracionPage', () => {
  let component: ResidenteValoracionPage;
  let fixture: ComponentFixture<ResidenteValoracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteValoracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidenteValoracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
