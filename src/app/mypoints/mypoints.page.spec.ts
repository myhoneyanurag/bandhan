import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypointsPage } from './mypoints.page';

describe('MypointsPage', () => {
  let component: MypointsPage;
  let fixture: ComponentFixture<MypointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
