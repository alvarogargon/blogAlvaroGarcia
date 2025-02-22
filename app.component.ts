import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioParaRellenarComponent } from './components/formulario-para-rellenar/formulario-para-rellenar.component';
import { IPlanta } from './interfaces/iplanta.interface';


@Component({
  selector: 'app-root',
  imports: [BlogComponent, FormularioParaRellenarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrayPlantas: IPlanta[] = [
    {
      titulo: "Flora Celestia",
      texto: `Es una planta mágica y rara que crece solo en los rincones más protegidos
       y remotos del planeta. 
      Se dice que sus hojas brillan con un resplandor suave durante la noche,
       creando una atmósfera de calma y serenidad alrededor de ella.
      Es conocida por su capacidad para purificar el aire y la energía a su alrededor,
       generando un ambiente relajante y revitalizante para cualquiera que se acerque.`,
      imagen: "images/primeraPlanta.png",
      tipoDeHoja: `De un verde esmeralda profundo,
       las hojas de la Flora Celestia tienen una textura aterciopelada.
       Las hojas se abren al amanecer y se cierran al atardecer, siguiendo el ciclo natural del sol.`,
      tipoDeLuzNecesaria: `Luz suave y filtrada: Aunque es una planta resistente y mágica, la Flora Celestia prefiere la luz indirecta.
       Le va bien una luz suave, como la que se filtra a través de las hojas de un árbol o la luz difusa que entra por una ventana protegida.`,
      fechaPublicacion: "2028-06-25"
    },
    {
      titulo: "Luminaria Arcaea",
      texto: `Es una planta mística que emite luz propia,
       conocida por su habilidad para iluminar de manera natural los rincones oscuros de bosques y selvas.
       Esta planta tiene una apariencia etérea, como si fuera un ser de otro mundo.
       Es famosa por atraer a aquellos con un corazón puro y tener una capacidad especial para purificar ambientes.`,
      imagen: "images/segundaFlor.png",
      tipoDeHoja: `Sus hojas son de un azul profundo con destellos plateados,
       y sus flores son de un blanco brillante, casi como estrellas fugaces.`,
      tipoDeLuzNecesaria: `La Luminaria Arcaea necesita una luz suave e indirecta durante el día, como la que entra por una ventana con cortinas finas o se filtra entre las hojas de los árboles.
       Durante la noche, debe estar en oscuridad o con luz tenue,
        como la luz de la luna, para que pueda resplandecer con su brillo natural.
         El ambiente debe tener una luz ambiental equilibrada, sin sol directo fuerte,
          para no opacar su resplandor mágico.`,
      fechaPublicacion: "2022-08-12"
    }
  ]

  getDataForm(event: IPlanta) {
    this.arrayPlantas = [...this.arrayPlantas, event]
    
  }
}
