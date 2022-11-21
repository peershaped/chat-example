import { FC,  useCallback, useEffect, useMemo, useRef } from "react";
import {
  ChatAdapter,
  FluentThemeProvider,
  DEFAULT_COMPONENT_ICONS,
  useAzureCommunicationChatAdapter,
  fromFlatCommunicationIdentifier,
  ChatComposite
} from "@azure/communication-react";
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from "@azure/communication-common";
import { initializeIcons, registerIcons } from "@fluentui/react";


type ChatClientProps  = {
  userId: string,
  displayName: string,
  chatThreadId: string,
  hideSendbox?: boolean,
  accessToken: string
}
const ChatClient: FC<ChatClientProps> = ({
  userId,
  displayName,
  chatThreadId,
  accessToken
}): JSX.Element => {
  const initialLoad = useRef(false);
  const endpointUrl = process.env.REACT_APP_COMMUNICATION_SERVICE_DOMAIN;
  const credential = useMemo(() => new AzureCommunicationTokenCredential(accessToken), [accessToken]);
  const userChatId = useMemo(
    () => fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
    [userId]
  );

  const adapterAfterCreate = useCallback(
    async (adapter: ChatAdapter): Promise<ChatAdapter> => {
      adapter.on("messageReceived", (listener) => {
        console.log("messageReceived")
      });
      adapter.on("error", (e) => {
        console.error(e);
      });
      if (initialLoad) {
        adapter.fetchInitialData();
        initialLoad.current = true
      }
      return adapter;
      
    },
    [initialLoad]
  );

  const adapter = useAzureCommunicationChatAdapter({
    endpoint: endpointUrl,
    userId: userChatId,
    displayName,
    credential,
    threadId: chatThreadId
  }, adapterAfterCreate);

  useEffect(() => {
    const disposeAdapter = (): void => adapter?.dispose();
    window.addEventListener("beforeunload", disposeAdapter);
    return () => {
      console.log("cleanup adapter");
      window.removeEventListener("beforeunload", disposeAdapter);
    }
  }, [adapter]);
  
  initializeIcons();
  registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

  if (!adapter || !chatThreadId || !displayName || !userId) {
    return (<p>initializing..</p>)
  }
  return (
    // <FluentThemeProvider>
    <ChatComposite
      adapter={adapter}
      options={{
        errorBar: true,
        topic: true
      }}
    />
    // </FluentThemeProvider>
  );
}

export default ChatClient;
