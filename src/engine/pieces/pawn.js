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
            posArray.push(new Square(pos.row+1, pos.col));
        } else {
            posArray.push(new Square(pos.row-1, pos.col));
        }
        return posArray;
    }
}