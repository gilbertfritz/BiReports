function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function randRGB(){
    return Math.floor(Math.random() * 255) + 0;
}

function randRGBAString(alpha){
    return "rgba(" + randRGB() + "," + randRGB() + "," + randRGB() + "," + alpha + ")";
}