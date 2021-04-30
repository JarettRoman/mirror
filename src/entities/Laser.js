import Phaser from 'phaser';
import { degreesToRadians } from '../utils';

export default class Laser {
  constructor(scene, x, y, direction, gfx) {
    this.scene = scene;
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.gfx = gfx;

    this.square = this.scene.add.rectangle(x, y, 16, 16, 0x000000);
    this.centerOfSquare = this.square.getCenter();

    this.aimLine = new Phaser.Geom.Line(
      this.centerOfSquare.x,
      this.centerOfSquare.y,
      0,
      0,
    );

    Phaser.Geom.Line.SetToAngle(
      this.aimLine,
      this.centerOfSquare.x,
      this.centerOfSquare.y,
      degreesToRadians(this.direction),
      999,
    );

    this.originalEndpoint = this.aimLine.getPointB();

    this.gfx.strokeLineShape(this.aimLine);
  }

  getBeam() {
    return this.aimLine;
  }

  setAimLineEndpoint(x, y) {
    if (x && y) {
      this.aimLine.setTo(
        this.centerOfSquare.x,
        this.centerOfSquare.y,
        x,
        y,
      );
    }
  }

  resetAimLineEndpoint() {
    this.setAimLineEndpoint(this.originalEndpoint.x, this.originalEndpoint.y);
  }
}
