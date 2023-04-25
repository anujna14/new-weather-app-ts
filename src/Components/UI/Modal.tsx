import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  textAlign: "center",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px"
}
 const ButtonStyle = {
    padding: "12px 28px",
    "&:hover":{
        backgroundColor: "#F97B22",
        color: "#fff"
    }
 }

type ModalType = {
  openVal: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  removeAllFav?: () => void;
  message: string
};

export default function BasicModal({ openVal, handleClose, removeAllFav, message }: ModalType) {
  return (
    <div>
      <Modal open={openVal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={containerStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure want to remove all the {message} ?
            </Typography>
            <div>
              <Button sx={ButtonStyle} onClick={handleClose}>No</Button>
              <Button sx={ButtonStyle} onClick={removeAllFav}>Yes</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
