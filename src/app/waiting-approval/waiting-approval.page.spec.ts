import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingApprovalPage } from './waiting-approval.page';

describe('WaitingApprovalPage', () => {
  let component: WaitingApprovalPage;
  let fixture: ComponentFixture<WaitingApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingApprovalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
