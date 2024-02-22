let magicianName : string[] = ['Albert' , 'Geaorge' , 'Einstin' , 'Henry'];

function show_magician( names : string[]) {
   
 names.forEach( name => {
    console.log(name);
 })
}

show_magician(magicianName);