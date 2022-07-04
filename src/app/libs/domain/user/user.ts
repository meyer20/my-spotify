export interface UserInterface {
  country: string;
  display_name: string;
  explicit_content: { filter_enabled: boolean, filter_locked: boolean };
  filter_enabled: boolean;
  filter_locked: boolean;
  external_urls: { spotify: string };
  spotify: string;
  followers: { href: string, total: number };
  href: string;
  id: string;
  images: any;
  height: any;
  url: string;
  width: any;
  product: string;
  type: string;
  uri: string;
}

export class User implements UserInterface {
  constructor(data: UserInterface) {
    this.country = data.country;
    this.display_name = data.display_name;
    this.explicit_content = data.explicit_content;
    this.external_urls = data.external_urls;
    this.filter_enabled = data.filter_enabled;
    this.filter_locked = data.filter_locked;
    this.followers = data.followers;
    this.height = data.height;
    this.href = data.href;
    this.id = data.id;
    this.images = data.images;
    this.product = data.product;
    this.spotify = data.spotify;
    this.type = data.type;
    this.uri = data.uri;
    this.url = data.url
    this.width = data.width
  }

  country: string;
  display_name: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: { spotify: string };
  filter_enabled: boolean;
  filter_locked: boolean;
  followers: { href: string; total: number };
  height: any;
  href: string;
  id: string;
  images: any;
  product: string;
  spotify: string;
  type: string;
  uri: string;
  url: string;
  width: any;
}
