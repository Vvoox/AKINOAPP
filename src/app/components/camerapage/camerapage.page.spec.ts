import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamerapagePage } from './camerapage.page';

describe('CamerapagePage', () => {
  let component: CamerapagePage;
  let fixture: ComponentFixture<CamerapagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerapagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamerapagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
