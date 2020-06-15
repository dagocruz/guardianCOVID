import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeResidentesPage } from './home-residentes.page';

describe('HomeResidentesPage', () => {
  let component: HomeResidentesPage;
  let fixture: ComponentFixture<HomeResidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeResidentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeResidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
