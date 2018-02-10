document.getElementById("hButton").addEventListener('click', function() {
  var rnd=Math.floor(Math.random() * 3);
  //window.alert(rnd);
  switch (rnd)
  {
  case 0:
    window.location.replace('http://wisdomquotes.com/gratitude-quotes/');
  break;
  case 1:
    window.location.replace('http://www.movemequotes.com/top-50-be-thankful-quotes/');
  break;
  default:
    window.location.replace('https://www.inc.com/jeff-haden/40-inspiring-motivational-quotes-about-gratitude.html');
  break;
  }
});

document.getElementById("sButton").addEventListener('click', function() {
  var rnd=Math.floor(Math.random() * 3);
  //window.alert(rnd);
  switch (rnd)
  {
  case 0:
    window.location.replace('https://9gag.com/gag/aW16ePq');
  break;
  case 1:
    window.location.replace('https://9gag.com/gag/aDxoqvO');
  break;
  default:
    window.location.replace('https://9gag.com/gag/a6oL8vL?ref=9g.m');
  break;
  }
});
