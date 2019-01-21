// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// https://i.imgur.com/lk5vJ7sm.jpg

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array or a string (depending on the language; Shell bash, PowerShell and Fortran return a string) with the size of each of the squares.

function sqInRect(lng, wdth) {
  if (lng === wdth) {
    return null;
  }
  var squareSizeArray = [];
  var smallLength;
  var largeLength;
  var numberSquares;
  lng > wdth
    ? ((smallLength = wdth), (largeLength = lng))
    : ((smallLength = lng), (largeLength = wdth));
  while (smallLength > 0) {
    var temp = smallLength;
    numberSquares = Math.floor(largeLength / smallLength);
    for (var i = 0; i < numberSquares; i++) {
      squareSizeArray.push(smallLength);
    }
    smallLength = largeLength - smallLength * numberSquares;
    largeLength = temp;
  }
  return squareSizeArray;
}
