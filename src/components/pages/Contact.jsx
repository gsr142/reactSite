import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xleqabga");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <TextField
        label="Subject"
        name="subject"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Message"
        name="message"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={state.submitting}
        sx={{ mt: 2, bgcolor: "#1557", color: "white" }}
      >
        <Typography>Submit</Typography>
      </Button>
    </Box>
  );
}
