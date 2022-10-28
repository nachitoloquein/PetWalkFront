export interface Plan{
      costo : number;
      encabezado : string;
      descripcion : string;
      cantidadCoins : number;
      costoNuevo?: number;
      porcentajeDescuento?: string,
      fechaTermino?: Date,
      descuentoActivo?: boolean
}