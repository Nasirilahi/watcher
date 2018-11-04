import { createStackNavigator } from "react-navigation";
import ExampleRoutes from "./routes/Routes";

export default () =>
  createStackNavigator(
    {
      ...ExampleRoutes
    },
    {
      mode: "modal",
      initialRouteName: "Home"
    }
  );
