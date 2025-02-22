import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPlanta } from '../../interfaces/iplanta.interface';

@Component({
  selector: 'app-formulario-para-rellenar',
  imports: [FormsModule],
  templateUrl: './formulario-para-rellenar.component.html',
  styleUrl: './formulario-para-rellenar.component.css'
})
export class FormularioParaRellenarComponent {
  nuevaPlanta: IPlanta = { titulo: "", texto: "", imagen: "", tipoDeHoja: "", tipoDeLuzNecesaria: "", fechaPublicacion: ""}
  @Output() mandarPlanta: EventEmitter<IPlanta> = new EventEmitter();

  error: boolean = false;

  getPlanta() {
    if(!this.nuevaPlanta.titulo || !this.nuevaPlanta.texto || !this.nuevaPlanta.imagen || !this.nuevaPlanta.tipoDeHoja || !this.nuevaPlanta.tipoDeLuzNecesaria || !this.nuevaPlanta.fechaPublicacion) {
      this.error = true;
      alert("❌ Error: Todos los campos son obligatorios")
      return;
    }
    this.error = false;

    this.mandarPlanta.emit(this.nuevaPlanta);
    this.nuevaPlanta = { titulo: "", texto: "", imagen: "", tipoDeHoja: "", tipoDeLuzNecesaria: "", fechaPublicacion: ""}
  }  
}
