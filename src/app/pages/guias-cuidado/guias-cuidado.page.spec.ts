import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuiasCuidadoPage } from './guias-cuidado.page';

describe('GuiasCuidadoPage', () => {
  let component: GuiasCuidadoPage;
  let fixture: ComponentFixture<GuiasCuidadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasCuidadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuiasCuidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
