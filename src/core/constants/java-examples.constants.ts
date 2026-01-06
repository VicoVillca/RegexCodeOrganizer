export const JAVA_EXAMPLE_COMPLEJO = `// EJEMPLO COMPLEJO - Código desordenado para organizar

import java.util.*;

import java.io.*;



public class EstudianteDesordenado {


// Campos mezclados
private int edad;
public String nombre;  
private String apellido;

// Constructor
public EstudianteDesordenado(String nombre, String apellido, int edad) {
this.nombre = nombre;
this.apellido = apellido;
    this.edad = edad;
    }

// Método público
public void imprimirDatos() {
System.out.println("Nombre: " + nombre);
System.out.println("Apellido: " + apellido);
        System.out.println("Edad: " + edad);
}


// Getter
public int getEdad() {
return edad;
}

// Setter
public void setEdad(int nuevaEdad) {
this.edad = nuevaEdad;
        }


private boolean esMayorDeEdad() {
    return edad >= 18;
}




// Método main
public static void main(String[] args) {
    
EstudianteDesordenado estudiante = new EstudianteDesordenado("Juan", "Perez", 20);
    
estudiante.imprimirDatos();
    
    
if (estudiante.esMayorDeEdad()) {
System.out.println("Es mayor de edad");
} else {
    System.out.println("Es menor de edad");
}
    
}
    
}`;