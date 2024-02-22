/*function make_album(artist : string , album : string  ) : string {
 return `${artist} , ${album}`;
}

console.log (make_album('Artist : Atif Aslam' , 'Music Album : Kahani' ));
console.log (make_album('Artist : Atif Aslam' , 'Music Album : Baatein' ));

console.log (make_album('Artist : Atif Aslam' , 'Music Album : Yaadein' )); */

//--------------- 3 dictionaries

/*function make_album(artist : string , album : string , tracks: number )  {
    return `${artist} , ${album} , ${tracks}`;
   }
   
   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Kahani',  ));
   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Baatein' ));
   
   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Yaadein' ));*/
   
   //---------- optional parameter------------

   function make_album(artist : string , album : string , noOfTracks?: string ) : string {

    if ( noOfTracks !== 'undefined'){
return `${artist} , ${album} , ${noOfTracks}`;
    }
    
    return `${artist} , ${album} `;
   }
    
   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Kahani' ,' Total no. Tracks = 10'  ));

   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Baatein' ));
   
   console.log (make_album('Artist : Atif Aslam' , 'Music Album : Yaadein' ));


   