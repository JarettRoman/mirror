import Phaser from 'phaser';
import { setupDragObj } from '../utils';
import Laser from '../entities/Laser';
import {
  UP, DOWN, LEFT, RIGHT,
} from '../constants';

export default class FirstLevel extends Phaser.Scene {
  constructor() {
    super({
      key: 'level-1',
    });

    this.block = null;
    this.graphics = null;
    this.laser = null;
    this.label = null;
    this.mouseCoords = null;
  }

  create() {
    this.label = this.add.text(500, 0, '', { color: '#000000', fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

    this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

    this.block = this.add.rectangle(300, 300, 48, 24, 0xff0000);

    setupDragObj(this, this.block);

    this.laser = new Laser(this, 400, 400, LEFT, this.graphics);
  }

  update() {
    this.laserbeam = this.laser.getBeam();
    this.graphics.clear();
    this.graphics.strokeLineShape(this.laserbeam);
    const pointer = this.input.activePointer;

    this.label.setText([
      `x: ${Phaser.Math.FloorTo(pointer.worldX)}`,
      `y: ${Phaser.Math.FloorTo(pointer.worldY)}`,
      `isDown: ${pointer.isDown}`,
      `rightButtonDown: ${pointer.rightButtonDown()}`,
    ]);

    // check if laser interescts with block
    if (Phaser.Geom.Intersects.LineToRectangle(this.laserbeam, this.block.getBounds())) {
      // grab intersection point
      const intersection = Phaser.Geom.Intersects.GetLineToRectangle(this.laserbeam, this.block.getBounds());
      // set endpoint of laser to be where the line intersects
      if (intersection) {
        this.laser.setAimLineEndpoint(intersection[0].x, intersection[0].y);
        this.graphics.clear();
        this.graphics.strokeLineShape(this.laserbeam);
      }
    } else {
      this.laser.resetAimLineEndpoint();
    }
  }
}
