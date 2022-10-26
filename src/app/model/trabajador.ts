export interface Trabajador{
    _id?: string,
    nombre: string, 
    apellido: string, 
    comuna: string, 
    genero: string, 
    telefono: string, 
    correo: string, 
    contrasena: string, 
    rut: string, 
    direccion: string,
    fechaNacimiento: string,
    documentos: string[],
    estado? : string
}