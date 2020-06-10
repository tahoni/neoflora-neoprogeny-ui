import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hybrids = [
    {
      id: 1,
      hybrid: '19001',
      parent: '',
      description: 'Nommer 19001',
      seed: 'Geen saad',
      offspring: 'Geen nageslag'
    },
    {
      id: 2,
      hybrid: '19002',
      parent: '',
      description: 'Nommer 19002',
      seed: 'Saad',
      offspring: 'Nageslag'
    },
    {
      id: 3,
      hybrid: '19003',
      parent: '19001 x 19002',
      description: 'Nommer 19003 (19001 x 19002)',
      seed: 'Dowwe saad',
      offspring: 'Geen nageslag'
    }
  ]

  constructor() {
  }

  getHybrids() {
    return this.hybrids;
  }
}
