import { Component } from '@angular/core';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.css'],
})
export class HomeHighlightsComponent {
  highlights: any = [
    {
      id: 1,
      isSet: true,
      picture: '../../../assets/img/spidey.png',
      name: 'Último halloween',
    },
    {
      id: 2,
      isSet: false,
      picture: '',
      name: '',
    },
    {
      id: 3,
      isSet: false,
      picture: '',
      name: '',
    },
    {
      id: 4,
      isSet: false,
      picture: '',
      name: '',
    },
    {
      id: 5,
      isSet: false,
      picture: '',
      name: '',
    },
  ];
}
