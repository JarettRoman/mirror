import Phaser from 'phaser';
import { degreesToRadians } from '../utils';

export default class Laser {
  constructor(scene, x, y, direction, gfx) {
    this.scene = scene;
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.gfx = gfx;

    console.log('created laser');

    this.square = this.scene.add.rectangle(x, y, 16, 16, 0x000000);
    this.centerOfSquare = this.square.getCenter();

    this.aimLine = new Phaser.Geom.Line(
      this.centerOfSquare.x,
      this.centerOfSquare.y,
      this.centerOfSquare.x,
      99999,
    );

    Phaser.Geom.Line.SetToAngle(
      this.aimLine,
      this.centerOfSquare.x,
      this.centerOfSquare.y,
      degreesToRadians(this.direction),
      999,
    );

    this.gfx.strokeLineShape(this.aimLine);
  }

  getBeam() {
    return this.aimLine;
  }

  setAimLineEndpoint(x, y) {
    this.aimLine.setTo(
      this.centerOfSquare.x,
      this.centerOfSquare.y,
      x,
      y,
    );
  }
}
