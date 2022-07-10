export interface AccessTokenInterface {
  access_token: string;
  expires_in: number;
  state: string;
  token_type: string;
}

export class AccessToken implements AccessTokenInterface {
  constructor(data: AccessTokenInterface) {
    this.access_token = data.access_token;
    this.expires_in = Number(data.expires_in);
    this.state = data.state;
    this.token_type = data.token_type;
  }

  access_token: string;
  expires_in: number;
  state: string;
  token_type: string;
}
