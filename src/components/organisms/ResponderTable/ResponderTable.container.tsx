import { useEffect } from 'react';

// Components
import ResponderTableView from './ResponderTable.view';

// Hooks
import { useResponderStore } from '@/hooks/useResponderStore';

// Models
import Responder from '@/models/Responder';

import { STATES } from '@/constants/connection';

function ResponderTableContainer() {
  const responders = useResponderStore.use.responders();
  const addResponder = useResponderStore.use.addResponder();
  const setIdentified = useResponderStore.use.setIdentified();

  useEffect(() => {
    const responder = new Responder({
      id: 'ccsfdg',
      quizId: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      timeZone: 'UTC',
      theme: 'auto',
    });
    responder.identify({
      email: 'member@example.com',
      name: 'Bob Whistle',
      group: 'X-1CS',
    });
    addResponder({
      id: 'r1',
      quizId: 1,
      userAgent: 'Agent',
      completed: true,
      identified: true,
      locale: 'en',
      platform: {
        browser: 'chrome',
        os: 'macos',
        type: 'desktop',
        version: '123',
      },
      state: STATES.ONLINE,
      timeZone: 'UTC',
      theme: 'auto',
      name: 'Responder 1',
    });
    addResponder({
      id: 'r2',
      quizId: 1,
      email: 'member@example.com',
      completed: false,
      identified: true,
      locale: 'en',
      platform: {
        browser: 'chrome',
        os: '',
        type: 'desktop',
        version: '123',
      },
      state: STATES.OFFLINE,
      timeZone: 'UTC',
      theme: 'auto',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      name: 'Responder 2',
    });
    addResponder({
      id: 'r3',
      quizId: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      completed: false,
      identified: true,
      platform: {
        browser: 'chrome',
        os: 'macos',
        type: 'desktop',
        version: '',
      },
      state: STATES.ERROR,
      timeZone: 'UTC',
      theme: 'auto',
      locale: 'en',
      name: 'Responder 3',
    });
    setIdentified('r3', false);
  }, [addResponder, setIdentified]);

  return <ResponderTableView responders={responders} />;
}

export default ResponderTableContainer;
