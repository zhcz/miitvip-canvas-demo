/*
 * +-------------------------------------------+
 * |                  MIITVIP                  |
 * +-------------------------------------------+
 * | Copyright (c) 2020 makeit.vip             |
 * +-------------------------------------------+
 * | Author: makeit <lirongtong@hotmail.com>   |
 * | Homepage: https://www.makeit.vip          |
 * | Github: https://git.makeit.vip            |
 * | Date: 2020-9-11 19:48                     |
 * +-------------------------------------------+
 */
import {MiTools, MiToolsSyncData, Tools} from '@components/canvas/Tools';
import {Canvas} from '@components/canvas/Canvas';

export class Laser extends Tools implements MiTools {
	name = 'laser';

	constructor(canvas: Canvas) {
		super(canvas);
		Tools.instances[this.name] = this;
	}

	draw<A extends MiToolsSyncData[]>(...args: A): void {}
	protected drawBegin(event: MouseEvent | PointerEvent | Touch): void {}
	protected drawUpdate(event: MouseEvent | PointerEvent | Touch): void {}
	protected drawEnd(event: MouseEvent | PointerEvent | Touch): void {}
}