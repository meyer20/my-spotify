export interface ArtistInterface {
  external_urls: { spotify: string };
  followers: { href: string, total: number };
  genres: string[];
  href: string;
  id: string;
  images: Array<{ url: string, height: number, width: number }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export class Artist implements ArtistInterface {
  constructor(data: ArtistInterface) {
    this.external_urls = data.external_urls
    this.followers = data.followers;
    this.genres = data.genres;
    this.href = data.href;
    this.id = data.id;
    this.images = data.images;
    this.name = data.name;
    this.popularity = data.popularity;
    this.type = data.type;
    this.uri = data.uri;
  }

  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  id: string;
  images: Array<{ url: string; height: number; width: number }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
