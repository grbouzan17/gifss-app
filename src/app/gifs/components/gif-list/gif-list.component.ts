import { Component, input } from '@angular/core';
import { GitListItemComponent } from "./gif-list-item/gif-list-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GitListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {

  gifs = input.required<Gif[]>();
}
