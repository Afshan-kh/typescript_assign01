const ordinalNum: number[] = [1 , 2 , 3 , 4 , 5, 6 , 7, 8 ,9];
//for( let i=0; i<=0; i++){
 //   console.log(ordinalNum);
//}


//---------- ordinal numbers

for (const number of ordinalNum){
    let ordinal : string;
    if ( number === 1) {
        ordinal = "st";
    }
    else if (number === 2){
        ordinal = "nd";
    }
    else if( number === 3){
        ordinal = "rd";
    }
        else {
            ordinal = "th";
        }
    

    console.log (`${number}${ordinal}`)
}