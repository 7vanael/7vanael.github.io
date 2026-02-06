// Tic-Tac-Toe — standalone JS port of the C# game logic
// Supports PvP, Easy (random AI), and Hard (minimax with alpha-beta pruning)

const SIZE = 3;
let board = [];
let currentTurn = "X";
let mode = "pvp";
let gameOver = false;

function startGame(selectedMode) {
    mode = selectedMode;
    board = Array(SIZE * SIZE).fill("");
    currentTurn = "X";
    gameOver = false;

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("new-game-btn").classList.add("hidden");
    document.getElementById("status").classList.remove("winner");

    renderBoard();
    updateStatus();
}

function renderBoard() {
    const boardEl = document.getElementById("board");
    boardEl.innerHTML = "";

    board.forEach((mark, i) => {
        const cell = document.createElement("button");
        cell.className = "cell";

        if (mark) {
            cell.textContent = mark;
            cell.classList.add("taken", mark.toLowerCase());
        }

        if (!gameOver && !mark) {
            cell.addEventListener("click", () => handleClick(i));
        }

        boardEl.appendChild(cell);
    });
}

function handleClick(index) {
    if (gameOver || board[index]) return;

    makeMove(index);

    if (!gameOver && mode !== "pvp") {
        setTimeout(() => {
            const aiMove = mode === "easy" ? getRandomMove() : getMinimaxMove();
            if (aiMove !== -1) makeMove(aiMove);
        }, 150);
    }
}

function makeMove(index) {
    board[index] = currentTurn;

    const result = checkResult();
    if (result) {
        gameOver = true;
        renderBoard();
        showResult(result);
        return;
    }

    currentTurn = currentTurn === "X" ? "O" : "X";
    renderBoard();
    updateStatus();
}

function updateStatus() {
    document.getElementById("status").textContent = `${currentTurn}'s turn`;
}

function showResult(result) {
    const statusEl = document.getElementById("status");
    if (result === "draw") {
        statusEl.textContent = "It's a draw!";
    } else {
        statusEl.textContent = `${result} wins!`;
    }
    statusEl.classList.add("winner");
    document.getElementById("new-game-btn").classList.remove("hidden");
}

function showMenu() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("status").classList.remove("winner");
    gameOver = false;
}

// --- Win detection ---

function checkWinner(b) {
    // Rows
    for (let r = 0; r < SIZE; r++) {
        const first = b[r * SIZE];
        if (first && allEqual(b, r * SIZE, SIZE, 1)) return first;
    }
    // Columns
    for (let c = 0; c < SIZE; c++) {
        const first = b[c];
        if (first && allEqual(b, c, SIZE, SIZE)) return first;
    }
    // Main diagonal
    if (b[0] && allEqual(b, 0, SIZE, SIZE + 1)) return b[0];
    // Anti-diagonal
    if (b[SIZE - 1] && allEqual(b, SIZE - 1, SIZE, SIZE - 1)) return b[SIZE - 1];

    return null;
}

function allEqual(b, start, count, step) {
    const val = b[start];
    for (let i = 1; i < count; i++) {
        if (b[start + i * step] !== val) return false;
    }
    return true;
}

function checkResult() {
    const winner = checkWinner(board);
    if (winner) return winner;
    if (board.every(c => c !== "")) return "draw";
    return null;
}

// --- AI: Random ---

function getRandomMove() {
    const empty = board.reduce((acc, v, i) => v === "" ? [...acc, i] : acc, []);
    if (empty.length === 0) return -1;
    return empty[Math.floor(Math.random() * empty.length)];
}

// --- AI: Minimax with alpha-beta pruning ---

function getMinimaxMove() {
    const aiMark = currentTurn;
    const humanMark = aiMark === "X" ? "O" : "X";
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < board.length; i++) {
        if (board[i] !== "") continue;
        board[i] = aiMark;
        const score = minimax(board, false, aiMark, humanMark, -Infinity, Infinity);
        board[i] = "";
        if (score > bestScore) {
            bestScore = score;
            bestMove = i;
        }
    }

    return bestMove;
}

function minimax(b, isMaximizing, aiMark, humanMark, alpha, beta) {
    const winner = checkWinner(b);
    if (winner === aiMark) return 10 + emptyCount(b);
    if (winner === humanMark) return -(10 + emptyCount(b));
    if (b.every(c => c !== "")) return 0;

    if (isMaximizing) {
        let best = -Infinity;
        for (let i = 0; i < b.length; i++) {
            if (b[i] !== "") continue;
            b[i] = aiMark;
            best = Math.max(best, minimax(b, false, aiMark, humanMark, alpha, beta));
            b[i] = "";
            alpha = Math.max(alpha, best);
            if (beta <= alpha) break;
        }
        return best;
    } else {
        let best = Infinity;
        for (let i = 0; i < b.length; i++) {
            if (b[i] !== "") continue;
            b[i] = humanMark;
            best = Math.min(best, minimax(b, true, aiMark, humanMark, alpha, beta));
            b[i] = "";
            beta = Math.min(beta, best);
            if (beta <= alpha) break;
        }
        return best;
    }
}

function emptyCount(b) {
    return b.filter(c => c === "").length;
}
