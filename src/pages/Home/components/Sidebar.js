import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CampaignIcon from '@mui/icons-material/Campaign';

const items = [
  {
    href: "/",
    icon: <AccountBoxIcon />,
    title: "Dashboard",
  },
  {
    href: "/customers",
    icon: <CampaignIcon />,
    title: "Customers",
  },
];

const bottomItems = [
  {
    href: "/logout",
    icon: <ExitToAppIcon />,
    title: "Logout",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ py: 3, px: 2.5 }}>
            <a href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </a>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 2,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            py: 3,
          }}
        >
          {bottomItems.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 85,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 85,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
