function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    
<<<<<<< HEAD
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    }
    
    else {
      array.push(`I am ${i} strange loops.`);
=======
    if (i === 0) {
      return `I am ${i} strange loop.`;
    }
    
    else {
      return `I am ${i} strange loops.`;
>>>>>>> c987f01ebddbb4ec2dcb10abc573e183f6553163
    }
  return array;
  }
return array;
}

function whileLoop(n) {
  let countdown = n;
  
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop(array) {
  var i = 0;
  
  function incrementVariable() {
    i = i + 1;
  }
  
  do {
    console.log('array length = ' + array.length + ' and i = ' + i);
    array.pop;
    --array.length;
  } while (array.length > 0 && incrementVariable());
  
  return array;
}