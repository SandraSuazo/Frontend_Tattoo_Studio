import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { AppointmentModal } from "./AppointmentModal.jsx";

export const ModifyAppointment = ({ appointmentId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpenModal}>
        <EditIcon />
      </IconButton>
      <AppointmentModal
        open={modalOpen}
        handleClose={handleCloseModal}
        isCreating={false}
        appointmentId={appointmentId}
      />
    </>
  );
};
