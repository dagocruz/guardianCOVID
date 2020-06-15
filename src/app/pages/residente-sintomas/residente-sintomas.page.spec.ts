import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidenteSintomasPage } from './residente-sintomas.page';

describe('ResidenteSintomasPage', () => {
  let component: ResidenteSintomasPage;
  let fixture: ComponentFixture<ResidenteSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidenteSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
