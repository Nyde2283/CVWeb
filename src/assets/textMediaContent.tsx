import { legendeContent } from './legendeContent';
import * as imgs from '../app/importator';

const carrouselImgs = Object.values(imgs);

export const texteMediaContent = legendeContent.map((item, index) => ({
	legendeContent: item,
	carrouselImgs: carrouselImgs[index],
}));
