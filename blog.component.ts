import { Component, Input } from '@angular/core';
import { IPlanta } from '../../interfaces/iplanta.interface';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  @Input() lasPlantas: IPlanta[] = [];
  plantas: IPlanta[] = [];
  
  ngOnChanges() {
  this.plantas = this.lasPlantas;
  this.plantas.forEach(planta => {
    ` ${planta.titulo}
      ${planta.texto}
      ${planta.imagen}
      ${planta.tipoDeHoja}
      ${planta.tipoDeLuzNecesaria}
      ${planta.fechaPublicacion} `
    })
  }
  
}
