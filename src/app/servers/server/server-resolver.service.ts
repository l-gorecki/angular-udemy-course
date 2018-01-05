import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterState, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRoute, state: RouterState): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }

}


interface Server { id: number; name: string; status: string; }
