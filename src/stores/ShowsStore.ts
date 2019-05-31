import { observable, action } from 'mobx';
import { SetStateAction, Dispatch, createContext } from 'react';
import getData from '../util/getData';
class ShowsStore {
  @observable shows: any[] = [];
  @observable
  currentUrl: string = ` https://www.episodate.com/api/most-popular?page=1`;
  @observable currentPage: number = 1;
  @observable nextUrl: string = '';
  @observable previousUrl: string = '';
  @observable currentShow: string = '';
  @action getCurrentPage(): void {
    getData(this.currentUrl).then(data => {
      console.log(data);
      this.shows = data.tv_shows;
    });
  }

  @action incrementPage(): void {
    if (this.nextUrl !== '') {
      this.currentUrl = this.nextUrl;
    }
  }
  @action decrementPage(): void {
    if (this.previousUrl !== '') {
      this.currentUrl = this.previousUrl;
    }
  }
}

const ShowsStoreContext = createContext(new ShowsStore());
export default ShowsStoreContext;
