import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './Registro.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';  // Agrega esta importación

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

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
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        HttpClientModule, 
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        ModalController
      ],
    });
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
