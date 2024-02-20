let guest_list : string[] = ['Grandfather' , 'Grandmother' , 'Uncle'];

 let absent_guest : string = 'Uncle';
let new_guest : string = 'Aunty';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++ ){
    console.log('Hi,' + guest_list[i] + '\n\nI, would like to invite you for dinner.\n\nThank you\n\n')
}

console.log( `${absent_guest} is not coming for dinner.`);
 
console.log('We have found out more space for guests and we want to 3 more guests for dinner.')



//-----we add 3 guests in list
guest_list.unshift('Nephew');
guest_list.splice(2 , 0 , 'Niece');
guest_list.push('School friend');

for(let i=0; i<guest_list.length; i++ ){
  console.log('Hi,' + guest_list[i] + '\n\nI, would like to invite you for dinner.\n\nThank you\n\n')
}


//---- sorry message for not inviting
console.log(`\n'Sorry! Dinner table not arrive in time. so, we are inviting only 2 guests.'`);


//-------------guest are removed 
while (guest_list.length > 2){
   let remove_guest =  guest_list.pop();
   console.log(`Sorry ${remove_guest}, you are not invited for Dinner.`);
}

for(let i=0; i<guest_list.length; i++ ){
        console.log('Hi,' + guest_list[i] + '\n\nI, You are still invited .\n\nThank you\n\n')
    }

    //-------------- all guests are removed here
    guest_list.splice(0,2);
console.log(guest_list);