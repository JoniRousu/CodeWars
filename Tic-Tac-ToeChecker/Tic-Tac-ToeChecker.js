function isSolved(board) {

    // Check horizontally

    for (let i = 0; i < 3; i++) {
        if (board[i].every( (val, j, arr) => val === arr[0] )) {
            return board[i][0];
        }
    }

    // Check vertically
    
    let vert1 = [0,0,0];
    let vert2 = [0,0,0];
    let vert3 = [0,0,0];

    for (let i = 0; i < 3; i++) {
        vert1[i] = board[i][0];
        vert2[i] = board[i][1];
        vert2[i] = board[i][2];
    }

    let vertical = [vert1, vert2, vert3];

    for (let i = 0; i < vertical.length; i++) {
        if (vertical[i].every( (val, j, arr) => val === arr[0] )) {
            return vertical[i][0];
        }
    }

    // Check diagonally

    let diag1 = [0,0,0];
    let diag2 = [0,0,0];

    for (let i = 0; i < 3; i++) {
        diag1[i] = board[i][i];
        diag2[i] = board[2-i][i];
    }

    let diagonal = [diag1, diag2];

    for (let i = 0; i < diagonal.length; i++) {
        if (diagonal[i].every( (val, j, arr) => val === arr[0] )) {
            return horizontal[i][0];
        }
    }
  }