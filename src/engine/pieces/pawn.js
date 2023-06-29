import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let posArray = new Array(0)
        let pos = board.findPiece(this)
        if (this.player === Player.WHITE) {
            if(board.findPiece(this).row === 1) {
                posArray.push(new Square(pos.row+2, pos.col));
            }
            posArray.push(new Square(pos.row+1, pos.col));
        } else {
            if(board.findPiece(this).row === 6) {
                posArray.push(new Square(pos.row-2, pos.col));
            }
            posArray.push(new Square(pos.row-1, pos.col));
        }
        return posArray;
    }
}