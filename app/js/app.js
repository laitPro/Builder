(function() {
  'use strict';

  // console.log('Версия jQuery:',jQuery.fn.jquery);
  for (let i=0; i<10; i++) {
    let newccc = [...Array(5)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    console.log(newccc);
  }
  
})();