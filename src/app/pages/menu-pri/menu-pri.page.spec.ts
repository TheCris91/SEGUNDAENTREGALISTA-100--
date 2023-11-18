import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPriPage } from './menu-pri.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('MenuPriPage', () => {
  let component: MenuPriPage;
  let fixture: ComponentFixture<MenuPriPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,],  //   OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
        providers: [ModalController], 
    });
    fixture = TestBed.createComponent(MenuPriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('abrir el menú al hacer click en el botón de menú', () => {
    const spyToggle = spyOn(component, 'toggle');
    const menuButton = fixture.nativeElement.querySelector('#lin7');
    menuButton.click();
    expect(spyToggle).toHaveBeenCalled();
  });

  // Agrega más pruebas según la lógica de tu aplicación y las interacciones del usuario.

  afterEach(() => {
    fixture.destroy();
  });
});
