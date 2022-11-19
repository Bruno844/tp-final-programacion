/*

    DOCTOR:

    • Los datos del doctor son: nombre, apellido, especialidad, matricula, 
    paciente


    * Debe contener un método que vaya mostrando cada turno.

    * Ademas un método que muestre los datos del doctor.
*/

class Clinica {
    constructor(){
        this.nombre = nombre;
        this.dueño = dueño;
        this.respJuridica = respJuridica;
    }
}


class Paciente {

    constructor(nombre, apellido, dni, fechaNacimiento,obraSocial){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        //this.turno = turno;
        this.obraSocial = obraSocial;
    }

    edadPaciente(){
        return this.fechaNacimiento - 2022;
    }

    mostrarTurno(){
        return `
        aca estaria su turno =
        nombre: ${this.nombre},
        apellido: ${this.apellido},
        dni: ${this.dni},
        fecha de nacimiento: ${this.fechaNacimiento},
        obra social: ${this.obraSocial}
        `
    }
    
}

//extender la clase paciente hacia el doctor

class Doctor {
    constructor(nombre,apellido,especialidad, matricula, pacientes, turno){
       // super(turno);
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
        this.pacientes = pacientes
    }
    

    showTurnos(){
        
    }

    datosDoctor(){
        return ` 
        nombre: ${this.nombre},
        apellido: ${this.apellido},
        especialidad: ${this.especialidad},
        matricula: ${this.matricula}
         `
    }
}



class Enfermero {

    constructor(nombre,apellido,matricula, pacientes,licenciatura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.pacientes = pacientes;
        this.licenciatura = licenciatura;
    }
}







//CREACION DE ARREGLOS
let doctoresArray = [];
let pacientesArray = [];


//CREACION DE TURNOS MEDIANTE INPUTS
do {

    let pacientes = prompt('ingrese su nombre');
    let apellido = prompt('apellido');
    let dni = parseInt(prompt('ingrese su dni'));
    let fechaNacimiento = prompt('ingrese su fecha de nacimiento' , new Date())
    let obraSocial = prompt('ingrese nombre de su obra social');

    let paciente1 = new Paciente(pacientes,apellido,dni,fechaNacimiento,obraSocial);
    pacientesArray.push(paciente1.mostrarTurno());

    var c = prompt('desea seguir escribiendo')
    
} while ( c == 'si');

console.log(pacientesArray)



  

//CREACION DE OBJETOS

let doc1 = new Doctor("manuel", "mansilla", "traumatologo", 25678, [], "22:00")
let doc2 = new Doctor("Juan", "Martinez", "Cardiologo", 2386, [], "22:00")
doctoresArray.push(doc1,doc2)

//console.log(doctoresArray)