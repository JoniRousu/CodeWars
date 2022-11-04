function isSolved(board) {

    // Prepare vertical arrays
    
    let vert1 = [0,0,0];
    let vert2 = [0,0,0];
    let vert3 = [0,0,0];

    for (let i = 0; i < 3; i++) {
        vert1[i] = board[i][0];
        vert2[i] = board[i][1];
        vert3[i] = board[i][2];
    }

    let vertical = [vert1, vert2, vert3];

    // Prepare diagonal arrays

    let diag1 = [0,0,0];
    let diag2 = [0,0,0];

    for (let i = 0; i < 3; i++) {
        diag1[i] = board[i][i];
        diag2[i] = board[2-i][i];
    }

    let diagonal = [diag1, diag2];

    let combinations = [board[0], board[1], board[2],
                        vertical[0], vertical[1], vertical[2],
                        diagonal[0], diagonal[1]];

    // Check for a winner

    for (let i = 0; i < combinations.length; i++) {
        if (combinations[i].every( (val, j, arr) => val === arr[0] )) {
            return combinations[i][0];
        }
    }
    
    // No winner: check if there are empty fields

    let boardValues = board[0];
    boardValues = boardValues.concat(board[1]);
    boardValues = boardValues.concat(board[2]);
  
    if (boardValues.find(empty => empty === 0) != undefined) {
        return -1; // Game is still going
    }

    return 0;
  }