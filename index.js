// const friends = ['Lisa', 'Kaitlin', 'Jan']
// const event = "surprise"

function writeCards(friends, event){
const messages = []

    for (let i = 0; i < friends.length; i++) {
       const message = `Thank you, ${friends[i]}, for the wonderful ${event} gift!`;
       messages.push(message);
    }
    return messages;
}


 function countDown(number) { 
 while (number > -1) {
   console.log(number);
   number--
 }
}

countDown(10)