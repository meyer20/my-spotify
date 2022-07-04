export interface AuthInterface {
  access_token: string;
  expires_in: string;
  state: string;
  token_type: string;
}

export class Auth implements AuthInterface {
  constructor(data: AuthInterface) {
    this.access_token = data.access_token;
    this.expires_in = data.expires_in;
    this.state = data.state;
    this.token_type = data.token_type;
  }

  access_token: string;
  expires_in: string;
  state: string;
  token_type: string;
}
