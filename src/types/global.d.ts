import type { STATES as CONNECTION_STATES } from '@/constants/connection';
import type { TYPES as MESSAGE_TYPES } from '../constants/message';

declare global {
  type ThemeModeType = 'auto' | 'dark' | 'light';

  type ConnectionStateType = (typeof CONNECTION_STATES)[keyof typeof CONNECTION_STATES];

  type ConnectionOpenParams = { quizId: number; locale: string };

  interface Client {
    id: string;

    userAgent: string;
    locale: string;
    theme: ThemeModeType;
  }

  type Message =
    | Messages.Complete
    | Messages.Connect
    | Messages.Identity
    | Messages.Init
    | Messages.Message
    | Messages.Page
    | Messages.Progress;

  type PlatformType = {
    browser: string;
    os: string;
    type: string;
    version: string;
  };

  namespace Messages {
    interface Complete {
      clientId: string;
      type: typeof MESSAGE_TYPES.progress;

      data: {
        result: object;
      };
    }

    interface Connect {
      type: typeof MESSAGE_TYPES.connect;

      data: {
        userAgent: string;
        clientId?: string;
        locale: string;
        pathname: string;
        platform: PlatformType;
        theme: ThemeModeType;
        timeZone: string;
      };
    }

    interface Identity {
      clientId: string;
      type: typeof MESSAGE_TYPES.identity;

      data: {
        email: string;
        group?: string;
        name?: string;
        context: {
          slugs: string[];
        };
      };
    }

    interface Init {
      type: typeof MESSAGE_TYPES.init;

      data: {
        userAgent: string;
        clientId: string;
        locale: string;
        platform: PlatformType;
        theme: ThemeModeType;
        timeZone: string;
      };
    }

    interface Message {
      clientId: string;
      type: typeof MESSAGE_TYPES.message;

      data: {
        text: string;
      };
    }

    interface Progress {
      clientId: string;
      type: typeof MESSAGE_TYPES.progress;

      data: {
        answer: object;
        page: string;
      };
    }
  }

  interface ResponderInterface {
    id: string; // clientId
    quizId: number;

    completed: boolean;
    connectedAt: Date;
    identified: boolean;
    locale: string;
    platform: PlatformType;
    progress: number;
    timeZone: string;
    state: ConnectionStateType;
    userAgent: string;

    email?: string;
    name?: string;
    theme?: ThemeModeType;
    group?: string;
    answer?: object;

    startAt?: Date;
    finishAt?: Date;
  }
}
