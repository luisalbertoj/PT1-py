import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  urlApi: 'https://gy7228.myfoscam.org:8443/',
  httpHeaders: new HttpHeaders({'Content-Type': 'application/json','usuario':'gustavo'})
};
