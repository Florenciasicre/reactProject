export class contact{
    Nombre = '';
    Apellido = '';
    Email = '';
    conectado = false;
    constructor(Nombre, Apellido, Email,conectado){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Email = Email
        this.conectado = conectado
    }
}