/*
* import all screens here for adding it in to route.
*/
import HomeScreen from "../../screens/Home";
import AddSymbol from "../../screens/AddSymbol";

const ExampleRoutes = {
  Home: {
    name: "Home",
    description: "Home Screen",
    screen: HomeScreen
  },
  AddSymbol: {
    name: "AddSymbol",
    description: "Add New Symbol Screen",
    screen: AddSymbol
  }
};

export default ExampleRoutes;
