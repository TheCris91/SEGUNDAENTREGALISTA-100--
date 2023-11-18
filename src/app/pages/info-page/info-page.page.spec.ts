import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPagePage } from './info-page.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('InfoPagePage', () => {
  let component: InfoPagePage;
  let fixture: ComponentFixture<InfoPagePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,],  //   OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
        providers: [ModalController], 
    });
    fixture = TestBed.createComponent(InfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
