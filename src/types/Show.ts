import ShowPreview from './ShowPreview';
import Episode from './Episode';
interface Show extends ShowPreview {
  youtube_link: string;
  image_path: string;
  rating: string;
  rating_count: string;
  countdown: null;
  genres: string[];
  pictures: string[];
  episodes: Episode[];
  description: string;
}
export default Show;
