import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamestePage } from './nameste.page';

describe('NamestePage', () => {
  let component: NamestePage;
  let fixture: ComponentFixture<NamestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
