import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidenteInfoPage } from './residente-info.page';

describe('ResidenteInfoPage', () => {
  let component: ResidenteInfoPage;
  let fixture: ComponentFixture<ResidenteInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidenteInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
