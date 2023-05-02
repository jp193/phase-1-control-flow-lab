function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue >= 2500) {
     return 'No can do.'
   }
  if (someValue < 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue < 2000) {
    return 'That will be twenty bucks.'
  } else {
    return `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city == 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return "Bye.";
    break;
}
}
console.log(switchOnCharmFromTip('not as generous'));
// switch (groceryItem) {
//     case 'tomato':
//       console.log('Tomatoes are $0.49');
//       break;
//     case 'lime':
//       console.log('Limes are $1.49');
//       break;
//     case 'papaya':
//       console.log('Papayas are $1.29');
//       break;
//     default: 
//       console.log('Invalid item');
//       break;
//   }