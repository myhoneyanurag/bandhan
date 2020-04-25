import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeManagerPage } from './home-manager.page';

describe('HomeManagerPage', () => {
  let component: HomeManagerPage;
  let fixture: ComponentFixture<HomeManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
