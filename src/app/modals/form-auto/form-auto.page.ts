import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-form-auto',
  templateUrl: './form-auto.page.html',
  styleUrls: ['./form-auto.page.scss'],
})
export class FormAutoPage implements OnInit {
  autos: any[] = [];
  imagenSeleccionadaURL: string = '';

  constructor(
    //private storageService: StorageService,
    private helperService: HelperService,
  ) {}

  ngOnInit() {}

  guardarAuto() {
    const patenteInput = document.getElementById('Patente') as HTMLIonInputElement;
    const patoInput = document.getElementById('pato') as HTMLIonInputElement;
    const modeloInput = document.getElementById('Modelo') as HTMLIonInputElement;
    const marcaInput = document.getElementById('Marca') as HTMLIonInputElement;
    const colorInput = document.getElementById('Color') as HTMLIonInputElement;

    const patente = patenteInput.value;
    const pato = patoInput.value;
    const modelo = modeloInput.value;
    const marca = marcaInput.value;
    const color = colorInput.value;

    if (!patente || !pato || !modelo || !marca || !color) {
      this.helperService.showAlert('Por favor, complete todos los campos.', 'Error');
      return;
    }

    if (typeof patente !== 'string' || patente.length !== 6) {
      this.helperService.showAlert('La patente debe tener exactamente 6 caracteres.', 'Error');
      return;
    }

    // Verificar si la patente ya existe
    if (this.autos.some((auto) => auto.patente === patente)) {
      this.helperService.showAlert('La patente ya existe.', 'Error');
      return;
    }

    if (typeof pato !== 'string' || pato.length !== 4 || isNaN(Number(pato))) {
      this.helperService.showAlert('El año del automóvil debe contener exactamente 4 dígitos numéricos.', 'Error');
      return;
    }

    if (typeof modelo !== 'string' || modelo.length < 3 || modelo.length > 40) {
      this.helperService.showAlert('El modelo debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }

    if (typeof marca !== 'string' || marca.length < 3 || marca.length > 40) {
      this.helperService.showAlert('La marca debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }

    if (typeof color !== 'string' || color.length < 3 || color.length > 40) {
      this.helperService.showAlert('El color debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }

    const auto = {
      patente: patente,
      modelo: modelo,
      marca: marca,
      pato: pato,
      color: color,
    };

    // Agregar el nuevo auto a la lista
    this.autos.push(auto);

    // Guardar la lista actualizada en el almacenamiento
    Preferences.set({ key: 'autos', value: JSON.stringify(this.autos) });

    this.helperService.showAlert('Datos agregados con éxito.', 'Éxito');

    patenteInput.value = '';
    patoInput.value = '';
    modeloInput.value = '';
    marcaInput.value = '';
    colorInput.value = '';
  }
}
