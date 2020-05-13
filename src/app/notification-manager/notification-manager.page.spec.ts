import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationManagerPage } from './notification-manager.page';

describe('NotificationManagerPage', () => {
  let component: NotificationManagerPage;
  let fixture: ComponentFixture<NotificationManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
