import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemesPage } from './schemes.page';

describe('SchemesPage', () => {
  let component: SchemesPage;
  let fixture: ComponentFixture<SchemesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
