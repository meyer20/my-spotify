export interface UserInterface {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean, filter_locked: boolean };
  external_urls: { spotify: string };
  followers: { href: string, total: number };
  href: string;
  id: string;
  images: Array<{ url: string, height: number, width: number }>;
  product: string;
  type: string;
  uri: string;
}

export class User implements UserInterface {
  constructor(data: UserInterface) {
    this.country = data.country;
    this.display_name = data.display_name;
    this.email = data.email;
    this.explicit_content = data.explicit_content;
    this.external_urls = data.external_urls;
    this.followers = data.followers;
    this.href = data.href;
    this.id = data.id;
    this.images = data.images;
    this.product = data.product;
    this.type = data.type;
    this.uri = data.uri;
  }

  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: any;
  product: string;
  type: string;
  uri: string;
}
