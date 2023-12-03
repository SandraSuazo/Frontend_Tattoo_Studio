import { Box, ImageListItem, ImageList } from "@mui/material";

const itemData = [
  {
    img: "src/assets/tattoos/tattoo01.png",
  },
  {
    img: "src/assets/tattoos/tattoo02.png",
  },
  {
    img: "src/assets/tattoos/tattoo03.jpeg",
  },
  {
    img: "src/assets/tattoos/tattoo04.png",
  },
  {
    img: "src/assets/tattoos/tattoo05.png",
  },
  {
    img: "src/assets/tattoos/tattoo06.png",
  },
  {
    img: "src/assets/tattoos/tattoo07.png",
  },
  {
    img: "src/assets/tattoos/tattoo08.png",
  },
];

export const ImagesGallery = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList cols={4} rowHeight={350}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              maxWidth: "250px",
              margin: 1,
            }}
          >
            <img
              srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
              alt={`Tattoo photo: ${index + 1}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
