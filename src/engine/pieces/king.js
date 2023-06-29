import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let posArray = [];
        let startRow = board.findPiece(this).row;
        let startCol = board.findPiece(this).col;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1]
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
