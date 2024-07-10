import React from "react";
import { Modal, Box, Typography } from "@mui/material";

// Define a type for the props expected by the ModalComponent
interface ModalData {
  header: string;
  subheader: string;
  dates: string;
  icon: string;
  iconType: string;
  modalBullets: string[];
}
interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  data: ModalData | null;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  handleClose,
  data,
}) => {
  if (!data) return null;

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { sm: "80%", md: "70%", lg: "50%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  console.log(
    data.header,
    data.subheader,
    data.dates,
    data.icon,
    data.iconType,
    data.modalBullets
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {data.header}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {data.subheader}
        </Typography>
        <Typography sx={{ mt: 2 }}>{data.dates}</Typography>
        <ul>
          {data.modalBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
