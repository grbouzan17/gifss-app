import { Gif } from '../interfaces/gif.interface';
import { Datum } from '../interfaces/giphy.interface';

export class GifMapper {
  static mapGiphyItemToGif(item: Datum): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: Datum[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
