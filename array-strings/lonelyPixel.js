// Given a picture consisting of black and white pixels, find the number of black lonely pixels.

// The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

// A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

// Example:
// Input:
// [['W', 'W', 'B'],
//  ['W', 'B', 'W'],
//  ['B', 'W', 'W']]

// Output: 3
// Explanation: All the three 'B's are black lonely pixels.

/**
 * @param {character[][]} picture
 * @return {number}
 */

let findLonelyPixel = function(picture) {
  let lonely = 0;
  let row = Array(picture[0].length).fill(0);
  let column = Array(picture.length).fill(0);
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[0].length; j++) {
      if (picture[i][j] === 'B') {
        row[j]++;
        column[i]++;
      }
    }
  }
  for (let i = 0; i < picture.length; i++) {
    if (column[i] === 1) {
      for (let j = 0; j < picture[0].length; j++)
        if (picture[i][j] === 'B') {
          if (row[j] == 1) {
            lonely++;
          }
        }
    }
  }
  return lonely;
};
