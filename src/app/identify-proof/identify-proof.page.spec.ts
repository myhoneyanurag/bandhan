import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentifyProofPage } from './identify-proof.page';

describe('IdentifyProofPage', () => {
  let component: IdentifyProofPage;
  let fixture: ComponentFixture<IdentifyProofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyProofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdentifyProofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
