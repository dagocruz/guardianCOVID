import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeColaboradoresPage } from './home-colaboradores.page';

describe('HomeColaboradoresPage', () => {
  let component: HomeColaboradoresPage;
  let fixture: ComponentFixture<HomeColaboradoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeColaboradoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeColaboradoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
