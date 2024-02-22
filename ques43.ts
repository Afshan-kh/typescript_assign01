

function show_magician( names : string[]) {
  
 names.forEach( name => {
    console.log(name);
 });
}


 function make_greet(magicianName:string[]){
return magicianName.map(magician => `The great ${magician}` ) ;

}

let magicianName : string[] = ['Albert' , 'Geaorge' , 'Einstien' , 'Henry'];

const magicianNameCopy : string[] = magicianName.slice();

let greetMagicians : string[] = make_greet(magicianNameCopy);

console.log("Magicians:");
show_magician(magicianName);

console.log("\nGreeted message:");
show_magician(greetMagicians);


