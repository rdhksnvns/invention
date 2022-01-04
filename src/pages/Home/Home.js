import { useState } from "react";
import { Box, Container, AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
import { DashboardSidebar } from "./components/Sidebar";
import { DashboardNavbar } from "./components/Navbar";
import { DashboardPlayArea } from "./components/PlayArea";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("xl")]: {
    paddingLeft: 85,
  },
}));

export const Home = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div style={{ backgroundColor: "#edf5fa" }}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <DashboardSidebar
              onClose={() => setSidebarOpen(false)}
              open={true}
            />
            
            <DashboardNavbarRoot
              sx={{
                left: {
                  lg: 85,
                },
                width: {
                  lg: "calc(100% - 85px)",
                },
              }}
            >
              <DashboardNavbar />
            </DashboardNavbarRoot>

            <DashboardLayoutRoot>
              <Box
                sx={{
                  display: "flex",
                  flex: "1 1 auto",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <DashboardPlayArea />
              </Box>
            </DashboardLayoutRoot>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
