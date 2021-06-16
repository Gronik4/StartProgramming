function testhHorisonBig(appoint){
    for(let i = 0; i < fields; i++) {
      for(let j = 0; j < fields; j++) {
        let count = 0;
        if(board[i][j] === appoint) { 
          for(let z = 0; (z < gain) && ((j + z) < fields); z++){ 
            if(board[i][j + z] === appoint){count++;}
            if(count === gain){return true;}
          }
        }
      }
    }
  }
  
  function testVerticalBig(appoint) {
    for(let i = 0; i < fields; i++) {
      for(let j = 0; j < fields; j++) {
        let count = 0;
        if(board[i][j] === appoint) { 
          for(let z = 0; (z < gain) && ((i + z) < fields); z++){ 
            if(board[i + z][j] === appoint){count++;}
            if(count === gain){return true;}
          }
        }
      }
    }
  }
  
  function testLeftDiagonaBigl(appoint) {
    for(let i = 0; i < fields; i++) {
      for(let j = 0; j < fields; j++) {
        let count = 0;
        if(board[i][j] === appoint) { 
          for(let z = 0; (z < gain) && ((i + z) < fields) && ((j + z) < fields); z++){ 
            if(board[i + z][j + z] === appoint){count++;}
            if(count === gain){return true;}
          }
        }
      }
    }
  }
  
  function testRightDiagonalBig(appoint) {
    for(let i = 0; i < fields; i++) {
      for(let j = 0; j < fields; j++) {
        let count = 0;
        if(board[i][j] === appoint) { 
          for(let z = 0; (z < gain) && ((i + z) < fields) && ((j - z) > -1); z++){ 
            if(board[i + z][j - z] === appoint){count++;}
            if(count === gain){return true;}
          }
        }
      }
    }
  }