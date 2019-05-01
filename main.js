// Sasso Carta e Forbice tra due giocatori CPU

//dichiaro due variabili
var cpu1 = sassoCartaForbici();

var cpu2 = sassoCartaForbici();

//definisco una funzione per generare un numero casuale da 1 a 3
function sassoCartaForbici() {
 var risultato = Math.floor(Math.random() *3)+1;
 //assegno a seconda del risultato una stringa sasso carta forbice
 switch (risultato) {
   case 1:
     risultato = "sasso";
     break;
   case 2:
     risultato = "carta";
     break;
   case 3:
     risultato = "forbici";
     break;
   default:
 }
 return risultato;
}

//imposto le condizioni per cui vincono cpu1 o cpu2
if(cpu1 == 'carta' && cpu2 == 'forbici' || cpu1 == 'forbici' && cpu2 == 'sasso' || cpu1 == 'sasso' && cpu2 == 'carta'){
  console.log('Cpu1 sceglie '+cpu1+' Cpu2 sceglie '+cpu2+' Vince CPU2');
}

if(cpu2 == 'carta' && cpu1 == 'forbici' || cpu2 == 'forbici' && cpu1 == 'sasso' || cpu2 == 'sasso' && cpu1 == 'carta'){
  console.log('Cpu1 sceglie '+cpu1+' Cpu2 sceglie '+cpu2+' Vince CPU1');
}
//nel caso pareggiano
if(cpu1 === cpu2){
  console.log('Cpu1 sceglie '+cpu1+' Cpu2 sceglie '+cpu2+' PAREGGIANO');
}
