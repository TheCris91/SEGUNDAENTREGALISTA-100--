import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAutoPage } from './form-auto.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('FormAutoPage', () => {
  let component: FormAutoPage;
  let fixture: ComponentFixture<FormAutoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,], 
        providers: [ModalController],
    });
    fixture = TestBed.createComponent(FormAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
