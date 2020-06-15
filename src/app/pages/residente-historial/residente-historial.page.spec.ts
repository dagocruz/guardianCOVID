import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidenteHistorialPage } from './residente-historial.page';

describe('ResidenteHistorialPage', () => {
  let component: ResidenteHistorialPage;
  let fixture: ComponentFixture<ResidenteHistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteHistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidenteHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
