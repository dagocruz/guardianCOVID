import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaResidentesPage } from './lista-residentes.page';

describe('ListaResidentesPage', () => {
  let component: ListaResidentesPage;
  let fixture: ComponentFixture<ListaResidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaResidentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaResidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
