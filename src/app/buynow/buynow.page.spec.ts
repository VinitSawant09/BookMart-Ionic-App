import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuynowPage } from './buynow.page';

describe('BuynowPage', () => {
  let component: BuynowPage;
  let fixture: ComponentFixture<BuynowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuynowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
