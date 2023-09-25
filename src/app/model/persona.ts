import { NivelEducacional } from './nivel-educacional';

export class Persona {
  public nombre = '';
  public apellido = '';
  public nivelEducacional: NivelEducacional = new NivelEducacional();
  public fechaNacimiento = '';

  public getTextoIdNivelEducacional(): string {
    if (this.nivelEducacional.id === 0) {
      return 'No asignado';
    }
    return this.nivelEducacional.id.toString();
  }

  public getTextoNombreNivelEducacional(): string {
    if (this.nivelEducacional.nombre.trim() === '') {
      return 'No asignado';
    }
    return this.nivelEducacional.nombre;
  }

  public getTextoFechaNacimiento(): string {
    if (this.fechaNacimiento.trim() === '') {
      return 'No asignado';
    }
    return this.fechaNacimiento.trim();
  }

  public getTextoNivelEducacional(): string {
    return this.nivelEducacional.getTextoNivelEducacional();
  }
}
