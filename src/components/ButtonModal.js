import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#999900" : "#80AAFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: 15,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ job }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {job.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Skills:{" "}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {" "}
            {job.skills ? (
              job.skills.slice(0, 4).map((skill) => (
                <Item key={skill}>
                  <Typography variant="body3">{skill}</Typography>
                </Item>
              ))
            ) : (
              <>None</>
            )}
          </Stack>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {job.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            City: {job.city}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Salary Range: ${parseInt(job.salaryLow)} to ${job.salaryHigh}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
