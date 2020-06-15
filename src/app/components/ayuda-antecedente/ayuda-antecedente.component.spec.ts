import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudaAntecedenteComponent } from './ayuda-antecedente.component';

describe('AyudaAntecedenteComponent', () => {
  let component: AyudaAntecedenteComponent;
  let fixture: ComponentFixture<AyudaAntecedenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaAntecedenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudaAntecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
