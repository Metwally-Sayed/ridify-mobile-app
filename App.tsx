import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/ProtectesRoutes";
import ProtectesRoutes from "./routes/ProtectesRoutes";
import { useState } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import { Provider } from "react-redux";
import { store } from "./state/store";

export default function App() {
  const [authed, setAuthed] = useState<boolean>(true);
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          {authed ? <ProtectesRoutes /> : <PublicRoutes />}
        </NavigationContainer>
      </Provider>
    </>
  );
}
