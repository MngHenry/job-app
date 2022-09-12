import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useForm } from "react-hook-form";
import FormProvider from "./form/FormProvider";
import FormTextField from "./form/FormTextField";
import FCheckbox from "./form/FCheckBox";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { Stack, Alert, InputAdornment, IconButton } from "@mui/material";
import Link from "@mui/material/Link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [defaultValues, setDefaultValues] = useState({
    username: "Web Virgil Learner",
    password: "123",
    remember: true,
  });
  const [logOut, setLogOut] = useState(false);
  const handleLogOut = () => {
    setLogOut(false);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    setDefaultValues(data);
    setOpen(false);
    setLogOut(true);
  };
  return (
    <>
      {logOut ? (
        <Button sx={{ color: "white" }} onClick={handleLogOut}>
          {" "}
          <PersonIcon />
          {defaultValues.username}
          <LoginIcon sx={{ mr: 2 }} />
        </Button>
      ) : (
        <>
          <Button sx={{ color: "white" }} onClick={handleOpen}>
            {" "}
            <LoginIcon sx={{ mr: 2 }} /> Login
          </Button>
          <Modal
            open={open}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title"> LOG IN</h2>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                  {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                  )}
                  <FormTextField name="username" label="Username" />
                  <FormTextField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {" "}
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {" "}
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <FCheckbox name="remember" label="Remember me" />
                  <Link sx={{ cursor: "pointer" }}>Sign In</Link>
                </Stack>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Login
                </LoadingButton>
              </FormProvider>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}
