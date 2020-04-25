import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginManagerPage } from './login-manager.page';

describe('LoginManagerPage', () => {
  let component: LoginManagerPage;
  let fixture: ComponentFixture<LoginManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
