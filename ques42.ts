
let magicianName : string[] = ['Albert' , 'Geaorge' , 'Einstien' , 'Henry'];

function show_magician( names : string[]) {
   console.log("Magicians:");
 names.forEach( name => {
    console.log(name);
 });
}


 function greet_guest(magicianName:string[]){
return magicianName.map(magician => `The great ${magician}` ) ;

}
 
magicianName = greet_guest(magicianName);


 show_magician(magicianName);



















console.log("Magicians:");