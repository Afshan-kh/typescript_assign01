let str = "afshan";


console.log(str.toUpperCase());// for uppercase letters


console.log(str.toLowerCase());//for lower case letters


let Titlecase : string = "";
 str.split(" ").forEach(word => {
    const capitalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    Titlecase += capitalWord + " ";

});
console.log(Titlecase);  //-------------- Titlecase

