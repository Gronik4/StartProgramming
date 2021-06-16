function testHorison(appoint) {
    for(let i = 0; i < fields; i++) {
      let count = 0;
      for(let j = 0; j < fields; j++) {
        if(board[i][j] === appoint) {count++;}
        if(count === gain){return true;}
      }
    } 
  }
  
  function testVertical(appoint) {
    for(let i = 0; i < fields; i++) {
      let count = 0;
      for(let j = 0; j < fields; j++) {
        if(board[j][i] === appoint) {count++;} 
        if(count === gain) {return true;}
      }
    }
  }
  
  function testDiagonal(appoint) {
    let count = 0; 
    let count1 = 0;
    for(let i = 0; i < fields; i++) {
      if(board[i][i] === appoint) {count++;}  
      if(count === gain) {return true;}
  
      if(board[i][fields - 1 - i] === appoint) {count1++;} 
      if(count1 === gain) {return true;}
    }
  }