import Phaser from 'phaser';
import FirstLevel from './scenes/FirstLevel';
import MyGame from './scenes/MyGame';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  backgroundColor: '#ffffff',
  scene: FirstLevel,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
console.log(game);
