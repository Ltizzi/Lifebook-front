import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-albums',
  templateUrl: './mis-albums.component.html',
  styleUrls: ['./mis-albums.component.css'],
})
export class MisAlbumsComponent {
  albumes: any = [
    {
      id: 1,
      picture: '../../../assets/img/bear.png',
      name: 'test1',
      subhead: 'blabla bla blabla',
    },
    {
      id: 2,
      picture: '../../../assets/img/class.png',
      name: 'test2',
      subhead: 'blabla bla blabla',
    },
    {
      id: 3,
      picture: '../../../assets/img/grandma.png',
      name: 'test3',
      subhead: 'blabla bla blabla',
    },
    {
      id: 4,
      picture: '../../../assets/img/toys.png',
      name: 'test4',
      subhead: 'blabla bla blabla',
    },
  ];
}
