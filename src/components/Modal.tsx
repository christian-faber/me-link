import React from "react";
import { Modal, Box, Typography } from "@mui/material";

// Define a type for the props expected by the ModalComponent
interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  data: Array<{
    id: string; // Assuming 'id' is a string, adjust the type as necessary
    header: string;
    subheader: string;
    dates: string; // Assuming 'dates' is a string, adjust the type as necessary
  }>;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  handleClose,
  data,
}) => {
  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        {data.map((item) => (
          <div key={item.id}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {item.header}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item.subheader}
            </Typography>
            <Typography>{item.dates}</Typography>
          </div>
        ))}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
