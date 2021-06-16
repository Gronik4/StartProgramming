let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
let fields =10;// Задаем размер поля
let gain = fields < 5? fields: 5;// Задаем количество выигрышных полей
// Простите Владимир Владимирович НО!! Дальше придется кое-что поменять в style.css. Иначе начиная с размера поля 5х5 и более, ну ОЧЕНЬ стремно смотрится.....
let gap = document.getElementById('board');

if(fields > 4 && fields < 8) {gap.style.gridGap = '5px';/* и здесь лучше бы сделать свойство font-size: 4em; класса field. Я не смог сделать это динамически, видимо потому, что класс field выводится тоже динамически и мне кажется нужно залезать в renderBoard(), а там Jquery!!!.... */} 
if(fields > 7 && fields < 11){gap.style.gridGap = '3px';/*здесь лучше бы сделать свойства font-size: 2em; и border-radius: 10px; класса field.*/}
if(fields > 10){gap.style.gridGap = '1px';/*здесь лучше бы сделать свойства font-size: 1рх; и border-radius: 7px; класса field.*/}

function startGame() {
  board = [];
  for(let i = 0; i < fields; i++) {
    board.push([],);
      for(let j = 0; j < fields; j++) {
        board[i].push('',);
      }
  }

  renderBoard(board);
}

function click(x, y) {
  let appoint = activePlayer === 0? players[0]: players[1];
    board[x].splice(y, 1, appoint);
    renderBoard(board);

  let horisontalSmall = testHorison(appoint);
  let verticalSmall = testVertical(appoint);
  let diagonalSmall = testDiagonal(appoint);

  let horisontalBig = testhHorisonBig(appoint);
  let verticalBig = testVerticalBig(appoint);
  let leftDiagonalBig = testLeftDiagonaBigl(appoint);
  let rightDioganlBig = testRightDiagonalBig(appoint);

  let horisontal = fields <= 5?  horisontalSmall: horisontalBig;
  let vertical = fields < 5? verticalSmall: verticalBig;
  let leftDiagonal = fields < 5? diagonalSmall: leftDiagonalBig;
  let rightDioganl = fields < 5? diagonalSmall: rightDioganlBig;

   if(horisontal === true || vertical === true || leftDiagonal === true || rightDioganl === true) {showWinner(activePlayer);}

// А мне кажется, что так было короче и понятнее.....
  /*for(let i = 0; i < fields; i++) {
    for(let j = 0; j < fields; j++) {
    // Проверка горизонталей
      let a = 0;
      if(board[i][j] === appoint) {
        for(let z = 0; (z < gain) && ((j + z) < fields); z++){ 
          if(board[i][j + z] === appoint){a++;}
          if(a === gain){
            showWinner(activePlayer);
            return;
          }
        }
     // Проверка вертикалей
        a = 0;
        for(let z = 0; (z < gain) && ((i + z) < fields); z++){
          if(board[i + z][j] === appoint) {a++;} 
          if(a === gain) {
            showWinner(activePlayer);
            return;
          }
        }
      //Проверка левых диагоналей
        a = 0;
        for(let z = 0; (z < gain) && ((i + z) < fields) && ((j + z) < fields); z++) {
          if(board[i + z][j + z] === appoint) {a++;} 
          if(a === gain) {
            showWinner(activePlayer);
            return;
          }
        }
      //Проверка правых диагоналей
        a = 0;
        for(let z = 0; (z < gain) && ((i + z) < fields) && ((j - z) > -1); z++) {
          if(board[i + z][j - z] === appoint) {a++;} 
          //console.log('a= ' + a);
          if(a === gain) {
            showWinner(activePlayer);
            return;
          }
        }
      }
    }//for j
  } */  //for i
  activePlayer = activePlayer === 0 ? activePlayer = 1:   activePlayer = 0;
}//click()

