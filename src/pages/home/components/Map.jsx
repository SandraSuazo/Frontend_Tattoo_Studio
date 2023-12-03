import { Paper } from "@mui/material";

export const Map = () => {
  return (
    <Paper
      sx={{
        width: "70%",
        height: "300px",
        margin: "auto",
      }}
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.4740048923836!2d-3.6889263240526478!3d40.39834895675791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229897307ae57%3A0x982c946f4750a2a1!2sGeeksHubs!5e0!3m2!1ses!2ses!4v1701613262396!5m2!1ses!2ses"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </Paper>
  );
};
