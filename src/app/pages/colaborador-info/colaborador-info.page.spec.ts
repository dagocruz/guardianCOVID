import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColaboradorInfoPage } from './colaborador-info.page';

describe('ColaboradorInfoPage', () => {
  let component: ColaboradorInfoPage;
  let fixture: ComponentFixture<ColaboradorInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboradorInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
