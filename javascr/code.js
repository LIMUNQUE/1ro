function onClickButton(){
  const op= document.getElementById("op").value;

  const num1=parseFloat(prompt("Ingrese numero 1"));
  const num2=parseFloat(prompt("Ingrese numero 2"));

  const resultP = document.getElementById("ResultP");
  const palabra=["suma","resta","multiplicación","división"];
  let resp=null;
  if (op==1){
    resp=num1+num2;
  }
  else if(op==2){
    resp=num1-num2;
  }
  else if(op==3){
    resp=num1*num2;
  }
  else if(op==4){
    resp=num1/num2;
  }
  else{
    alert("Ingreso no valido")
  }
  resultP.innerText=`El resultado de la ${palabra[op-1]} es: ${resp}`;
    
}

class Animal{
  constructor(especie,edad,color){
    this.especie=especie;
    this.edad=edad;
    this.color=color;
    this.info=`Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
  }

  verInfo(){
    console.log(this.info+"<br>")
  }
}
class Perro extends Animal{//Herencia de animal
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza=raza;
  }
  ladrar(){
    console.log("Wow, wow");
  }

  get getRaza(){
    return this.raza;
  }
}

const tobi=new Perro("perro",5,"marrón", "Labrador");
const gato=new Animal("gato",2,"amarillo");
const pajaro=new Animal("pajaro",1,"rojo");

tobi.verInfo();

let cad1="Hola";
let cad2="Adios";
let res=cad1.startsWith(cad2);//Comiensa con (endsWith)
res=cad1.includes(cad2);//cad2 esta en cadena1?
res=cad1.indexOf(cad2);//Devuelve el indce donde se encuentra la cadena. Si no encuentra devuelve -1
res=cad1.lastIndexOf(cad2);//Devuelve el indice de la ultima palabra
res=cad1.padStart(10,"a");//aaaaaAdios rellena la palabra - padEnd, al final
res=cad1.split(" ");//divide por espacios
res=cad1.substring(0,3);//corta la cadena
//toLowerCase: a minuscula - toSting:a string-  .length:cantidad de caracteres
//trim(): elimina los espacios- trimEnd()-trimStart()
//listas
let lista=[1,23,4,5];
res=lista.pop()//remueve el ultimo valor y lo guarda
//.push("Palabra"): agrega a un array- unshift al principio
//.reverse()
//.join("-") convierte a texto con separador "-"
Math.max(1,3,53,33,24);
Math.random()//0 a 1  - round()- floor() redondea para abajo-trunc:parte entera
//Math.round() redondea-