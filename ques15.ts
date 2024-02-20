let guest_list : string[] = ['Grandfather' , 'Grandmother' , 'Uncle'];

for(let i=0; i<guest_list.length; i++ ){
    console.log('Hi,' + guest_list[i] + '\n\nI, would like to invite you for dinner.\n\nThank you\n\n')
}

let absent_guest : string = 'Uncle';
let new_guest : string = 'Aunty';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++ ){
    console.log('Hi,' + guest_list[i] + '\n\nI, would like to invite you for dinner.\n\nThank you\n\n')
}

console.log( `${absent_guest} is not coming for dinner.`);
 

 