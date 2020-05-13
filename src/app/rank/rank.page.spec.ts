import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankPage } from './rank.page';

describe('RankPage', () => {
  let component: RankPage;
  let fixture: ComponentFixture<RankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
