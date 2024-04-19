import AppContentArea from "@components/AppContentArea";
import AppNavMenu from "@components/AppNavMenu";

const App = () => {
  return (
    <Box sx={appWrapper}>
      <AppNavMenu />
      <AppContentArea isOpen={false} />
    </Box>
  );
};

export default App;
