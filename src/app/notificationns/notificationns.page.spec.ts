import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationnsPage } from './notificationns.page';

describe('NotificationnsPage', () => {
  let component: NotificationnsPage;
  let fixture: ComponentFixture<NotificationnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
