import { observable, action } from 'mobx';
import { SetStateAction, Dispatch, createContext } from 'react';
import getData from '../util/getData';
class ShowsStore {
  @observable shows: any[] = [];
  @observable pages: number = 0;

  @action getPage = async (page: number): Promise<void> => {
    try {
      const url = `https://www.episodate.com/api/most-popular?page=${page}`;
      const response = await getData(url);
      this.shows = response.tv_shows;
      this.pages = response.pages;
    } catch (err) {
      console.log(err);
    }
  };
}

const ShowsStoreContext = createContext(new ShowsStore());
export default ShowsStoreContext;
