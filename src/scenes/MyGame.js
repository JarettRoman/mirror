import Phaser from 'phaser';
import logoImg from '../assets/logo.png';

export default class MyGame extends Phaser.Scene {
  constructor() {
    super({
      key: 'my-game',
    });
  }

  preload() {
    this.load.image('logo', logoImg);
  }

  create() {
    const logo = this.add.image(this.cameras.main.width / 2, 400, 'logo');

    // this.tweens.add({
    //     targets: logo,
    //     y: this.cameras.main.height / 2,
    //     duration: 2000,
    //     ease: "Power2",
    //     yoyo: true,
    //     loop: -1
    // });
  }
}
