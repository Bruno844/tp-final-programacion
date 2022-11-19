class Clinica {
    constructor(nombre, dueño, respJuridica, doctores,enfermeros){
        this.nombre = nombre;
        this.dueño = dueño;
        this.respJuridica = respJuridica;
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

class Personal {
    constructor(nombre, apellido, pacientes, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.pacientes = pacientes;
    }
}

var pacientesMatias = [];
var pacientesJorge = [];

class Enfermero extends Personal {
    constructor(nombre, apellido, pacientes, matricula, licenciatura) {
        super(nombre, apellido, pacientes, matricula);
        this.licenciatura = licenciatura;
    }

    crearPaciente(){
        let enfermeroConsulta = prompt('con que enfermero desea atenderse?');

        if(enfermeroConsulta == 'Matias'){

            do {

                let nombre = prompt('ingrese su nombre');
                let apellido = prompt('apellido');
                let dni = parseInt(prompt('ingrese su dni'));
                let fechaNacimiento =  parseInt(prompt('ingrese su fecha de nacimiento'))
                let obraSocial = prompt('ingrese nombre de su obra social');
                let turno = prompt('ingrese el horario');
            
                var paciente1 = new Paciente(nombre,apellido,dni,fechaNacimiento,obraSocial,turno,enfermeroConsulta);
                pacientesMatias.push(paciente1);
            
                var c = prompt('desea seguir escribiendo')
                
            } while ( c == 'si');

            console.log(paciente1.mostrarTurno())
            console.log(enfermero1)
            
        }else if(enfermeroConsulta == 'Jorge'){

            do {

                let nombre = prompt('ingrese su nombre');
                let apellido = prompt('apellido');
                let dni = parseInt(prompt('ingrese su dni'));
                let fechaNacimiento = parseInt(prompt('ingrese su fecha de nacimiento'))
                let obraSocial = prompt('ingrese nombre de su obra social');
                let turno = prompt('ingrese el horario');
            
                var paciente1 = new Paciente(nombre,apellido,dni,fechaNacimiento,obraSocial,turno,enfermeroConsulta);
                pacientesJorge.push(paciente1);
            
                var c = prompt('desea seguir escribiendo')
                
            } while ( c == 'si');

            console.log(paciente1.mostrarTurno())
            console.log(enfermero2)
            

        }else{
            return 'no existe ningun enfermero con ese nombre'
        }
    }

    
}

//extender la clase paciente hacia el doctor

let pacientesJulian = [];
let pacientesJuan = [];

class Doctor extends Personal {
    constructor(nombre, apellido, pacientes, matricula, especialidad) {
        super(nombre, apellido, pacientes, matricula,Doctor);
        this.especialidad;
    }

    crearPacienteDoctor(){
        var doctorConsulta= prompt('con que doctor desea atenderse?');

        if(doctorConsulta == 'Julian'){

            do {

                let nombre = prompt('ingrese su nombre');
                let apellido = prompt('apellido');
                let dni = parseInt(prompt('ingrese su dni'));
                let fechaNacimiento =  parseInt(prompt('ingrese su fecha de nacimiento'))
                let obraSocial = prompt('ingrese nombre de su obra social');
                let turno = parseInt(prompt('ingrese el horario'));
            
                var paciente1 = new Paciente(nombre,apellido,dni,fechaNacimiento,obraSocial,turno,doctorConsulta);
                pacientesJulian.push(paciente1);
            
                var c = prompt('desea seguir escribiendo')
                
            } while ( c == 'si');

            console.log(paciente1.mostrarTurno())
            console.log(pacientesJulian)
        
        }else if(doctorConsulta == 'Juan'){

            do {

                let nombre = prompt('ingrese su nombre');
                let apellido = prompt('apellido');
                let dni = parseInt(prompt('ingrese su dni'));
                let fechaNacimiento = parseInt(prompt('ingrese su fecha de nacimiento'))
                let obraSocial = prompt('ingrese nombre de su obra social');
                let turno = parseInt(prompt('ingrese el horario'));

            
                var paciente1 = new Paciente(nombre,apellido,dni,fechaNacimiento,obraSocial,turno, doctorConsulta);
                pacientesJuan.push(paciente1);
            
                var c = prompt('desea seguir escribiendo')
                
            } while ( c == 'si');

            console.log(paciente1.mostrarTurno())
            console.log(pacientesJuan)

        }else{
            return 'no existe ningun doctor con ese nombre'
        }


    }


    datosDoctor(){
        return ` 
        nombre: ${this.nombre},
        `
    }
}



class Paciente {

    constructor(nombre, apellido, dni, fechaNacimiento,obraSocial, turno, doctor){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.turno = turno;
        this.obraSocial = obraSocial;
        this.doctor = doctor
    }

    /*edadPaciente(){
        return this.fechaNacimiento - 2022;
    }*/

    mostrarTurno(){
        return `
        turnoo =
        nombre: ${this.nombre},
        apellido: ${this.apellido},
        dni: ${this.dni},
        fecha de nacimiento: ${this.fechaNacimiento},
        obra social: ${this.obraSocial},
        doctor: ${this.doctor}
        `
    }
   
    
}



//CREACION DE ARREGLOS
let doctoresArray = [];
let enfermerosArray = [];


//CREACION DE TURNOS MEDIANTE INPUTS
/*do {

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
*/



  

//CREACION DE OBJETOS DOCTOR

let doc1 = new Doctor('Julian', 'Rozas', pacientesJulian, 12345, 'Traumatologo')
let doc2 = new Doctor("Juan", "Martinez", pacientesJuan, 2398, 'Pediatria')
doctoresArray.push(doc1,doc2);



//CREAR ENFERMEROS
let enfermero1 = new Enfermero("Matias","Ruiz", pacientesMatias, 1233,true )
let enfermero2 = new Enfermero("jorge", "Nitales", pacientesJorge, 453545,true)
enfermerosArray.push(enfermero1,enfermero2)

console.log(doc1.crearPacienteDoctor())

//console.log(enfermero1.crearPaciente())
