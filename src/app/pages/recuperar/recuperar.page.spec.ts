import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        params: {
          idempleado: 123,  // proporcionar un valor simulado para 'idempleado'
        },
      },
      paramMap: new BehaviorSubject({}),
    };
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), 
        AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule],
        providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },ModalController], 
    });
    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
