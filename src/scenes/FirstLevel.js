import Phaser from 'phaser';
import { degreesToRadians } from '../utils';

export default class FirstLevel extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'level-1'
        });

        const block = null;
    }


    preload ()
    {
        // this.load.image('logo', logoImg);
    }
      
    create ()
    {
        //create bouncy block to test laser physics

        this.block = this.add.rectangle(300, 300, 24, 24, 0xff0000);
        // this.block = this.physics.add.rectangle(300, 300, 24, 24);
        // this.physics.add.existing(this.block, false);
        // this.block.body.setCollideWorldBounds();

        // this.block.body.setBounceY(4);
        // const blockGroup = this.physics.add.group({
        //     classType: Phaser.GameObjects.Rectangle,
        //     bounceX: 1,
        //     bouncY: 1,
        //     collideWorldBounds: true
        // });

        // blockGroup.create(this, 100, 200, 24, 24, 0x000000);
        // blockGroup.create(300, 400);
        // blockGroup.create(100, 200);
        // blockGroup.create(600, 300);

        // console.log(blockGroup);


        // console.log(block);
        this.createLaser(64, 64);
        // this.input.on('pointermove', (pointer) => {
        //     // console.log(pointer.x, pointer.y);
        // });
    }

    update ()
    {
    }

    createLaser (pointX, pointY) 
    {
        const square = this.add.rectangle(pointX, pointY, 16, 16, 0x000000);
        const centerOfSquare = square.getCenter();
        console.log(centerOfSquare);
        const line = new Phaser.Geom.Line(
            centerOfSquare.x, 
            centerOfSquare.y, 
            centerOfSquare.x, 
            this.cameras.main.centerX 

            /*
             * Could possibly figure out a way to sense the closest 
             * Point in front of laser that laser initially hits.
             * We'd replace the last two params with that value.
             */

        );
        
        Phaser.Geom.Line.SetToAngle(line, centerOfSquare.x, centerOfSquare.y, degreesToRadians(90), 1000);

        const graphics = this.add.graphics({
            lineStyle: {
                width: 4,
                color: 0xaa00aa
            }
        });

        graphics.strokeLineShape(line);

        console.log(line);
    }


}
