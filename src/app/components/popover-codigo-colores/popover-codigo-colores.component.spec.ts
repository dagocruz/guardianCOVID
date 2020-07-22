import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverCodigoColoresComponent } from './popover-codigo-colores.component';

describe('PopoverCodigoColoresComponent', () => {
  let component: PopoverCodigoColoresComponent;
  let fixture: ComponentFixture<PopoverCodigoColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverCodigoColoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverCodigoColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
