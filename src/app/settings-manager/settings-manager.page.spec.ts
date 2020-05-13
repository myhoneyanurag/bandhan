import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsManagerPage } from './settings-manager.page';

describe('SettingsManagerPage', () => {
  let component: SettingsManagerPage;
  let fixture: ComponentFixture<SettingsManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
