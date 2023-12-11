import { TattooArtistCard } from "./components/TattooArtistCard";

export const TattooArtists = () => {
  const tattooArtistsData = [
    {
      image: "src/assets/tattoo_artist/Artist_Alan.png",
      name: "Alan",
      surname: "Hermoso",
      phone: "658459658",
      email: "alan.hermoso@example.com",
    },
    {
      image: "src/assets/tattoo_artist/Artist_Debora.png",
      name: "Debora",
      surname: "Sanchez",
      phone: "637082522",
      email: "debora.sanchez@example.com",
    },
    {
      image: "src/assets/tattoo_artist/Artist_John.png",
      name: "John",
      surname: "Smith",
      phone: "637902522",
      email: "john.smith@example.com",
    },
    {
      image: "src/assets/tattoo_artist/Artist_Claudia.png",
      name: "Claudia",
      surname: "Madrigal",
      phone: "637402522",
      email: "claudia.madrigal@example.com",
    },
    {
      image: "src/assets/tattoo_artist/Artist_Mute.png",
      name: "Mute",
      surname: "Simpson",
      phone: "659345234",
      email: "mute.simpson@example.com",
    },
  ];
  return <TattooArtistCard tattooArtistsData={tattooArtistsData} />;
};
