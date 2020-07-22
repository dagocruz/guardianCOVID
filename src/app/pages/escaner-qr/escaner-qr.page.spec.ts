import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscanerQrPage } from './escaner-qr.page';

describe('EscanerQrPage', () => {
  let component: EscanerQrPage;
  let fixture: ComponentFixture<EscanerQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscanerQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscanerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
