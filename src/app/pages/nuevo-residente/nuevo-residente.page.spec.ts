import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoResidentePage } from './nuevo-residente.page';

describe('NuevoResidentePage', () => {
  let component: NuevoResidentePage;
  let fixture: ComponentFixture<NuevoResidentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoResidentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
