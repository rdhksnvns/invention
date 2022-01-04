import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CustomizedSteppers from "./Stepper";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const DashboardPlayArea = (props) => {
  const [values, setValues] = useState({
    name: "",
    code: "",
    startDate: "",
    endDate: "",
    longitude: "",
    latitude: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Paper sx={{ px: 6, py: 10, borderRadius: 6 }}>
            <CustomizedSteppers />

            <Box sx={{ mt: 6, mx: 4 }}>
              <form autoComplete="off" noValidate {...props}>
                <Typography sx={{ mb: 4 }} variant="h5">
                  Basic Details
                </Typography>

                <Card variant="outlined">
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={8} xs={8}>
                        <Grid container spacing={3}>
                          <Grid item md={6} xs={12}>
                            <TextField
                              fullWidth
                              label="Project Name"
                              name="name"
                              onChange={handleChange}
                              required
                              value={values.name}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField
                              fullWidth
                              label="Project Code"
                              name="code"
                              onChange={handleChange}
                              value={values.code}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                              <DatePicker
                                fullWidth
                                label="Project Start Date"
                                name="startDate"
                                value={startDate}
                                onChange={(newValue) => {
                                  setStartDate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                              <DatePicker
                                fullWidth
                                label="Project End Date"
                                name="endDate"
                                value={endDate}
                                onChange={(newValue) => {
                                  setEndDate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={4} xs={4}>
                        <Grid container spacing={3}>
                          <Grid item md={12} xs={12}>
                            <Card variant="outlined" fullWidth>
                              <CardContent sx={{ py: 8, textAlign: "center"}}>
                                <CloudUploadIcon fontSize="large" />
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Typography sx={{ mb: 4, mt: 6 }} variant="h5">
                  Project Details
                </Typography>

                <Card variant="outlined">
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Longitude"
                          name="longitude"
                          onChange={handleChange}
                          value={values.longitude}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Latitude"
                          name="latitude"
                          onChange={handleChange}
                          value={values.latitude}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </form>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};
