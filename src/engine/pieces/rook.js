import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let posArray = new Array(0)
        let pos = board.findPiece(this)

        for (let i= 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                if (i === board.findPiece(this).row && j === board.findPiece(this).col) {
                    continue;
                }
                else if (i === board.findPiece(this).row || j === board.findPiece(this).col) {
                    posArray.push(new Square(i, j))
                }
            }
        }
        return posArray;
    }
}