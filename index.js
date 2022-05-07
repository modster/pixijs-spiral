import { BlurFilter } from '@pixi/filter-blur';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';

let container = new Container();
let sprite = Sprite.from("");

sprite.width = 512;
sprite.height = 512;

// Adds a sprite as a child to this container. As a result, the sprite will be rendered whenever the container
// is rendered.
container.addChild(sprite);

// Blurs whatever is rendered by the container
container.filters = [new BlurFilter()];
