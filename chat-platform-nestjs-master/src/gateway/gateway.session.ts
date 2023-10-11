import { Injectable } from '@nestjs/common';
import { AuthenticatedSocket } from '../utils/interfaces';

export interface IGatewaySessionManager {
  getUserSocket(id: number): AuthenticatedSocket;
  setUserSocket(id: number, socket: AuthenticatedSocket): void;
  removeUserSocket(id: number): void;
  getSockets(): Map<number, AuthenticatedSocket>;
}

@Injectable()
export class GatewaySessionManager implements IGatewaySessionManager {
  private readonly sessions: Map<number, AuthenticatedSocket> = new Map();

  //При отправке какого либо сообщения
  getUserSocket(id: number) {
    return this.sessions.get(id);
  }

  //При подключении
  setUserSocket(userId: number, socket: AuthenticatedSocket) {
    this.sessions.set(userId, socket);
  }

  //При отключении
  removeUserSocket(userId: number) {
    this.sessions.delete(userId);
  }

  //нз
  getSockets(): Map<number, AuthenticatedSocket> {
    return this.sessions;
  }
}
