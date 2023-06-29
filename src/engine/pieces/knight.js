import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let posArray = new Array(0);
        let startRow = board.findPiece(this).row;
        let startCol = board.findPiece(this).col;

        const directions = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2]
        ];

        for (const direction of directions) {
            let row = startRow;
            let col = startCol;

            if (
                row + direction[0] >= 0 &&
                row + direction[0] <= 7 &&
                col + direction[1] >= 0 &&
                col + direction[1] <= 7
                ) {
                row += direction[0];
                col += direction[1];
                posArray.push(new Square(row, col));
            }
        }

        return posArray;
    }
}
