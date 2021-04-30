import Phaser from 'phaser';

export const degreesToRadians = (degrees) => {
  const pi = Math.PI;
  return degrees * (pi / 180);
};

export function setupDragObj(scene, obj) {
  obj.setInteractive();
  scene.input.setDraggable(obj);
  scene.input.dragDistanceThreshold = 16;

  scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    gameObject.setX(dragX);
    gameObject.setY(dragY);
  });
}
