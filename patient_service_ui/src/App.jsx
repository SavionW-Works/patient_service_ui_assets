import AppContentArea from "@components/AppContentArea";
import AppNavMenu from "@components/navigation/AppNavMenu";
import { appWrapper } from "@styles/styles";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box sx={appWrapper}>
      <AppNavMenu />
      <AppContentArea isOpen={false} />
    </Box>
  );
};

export default App;
