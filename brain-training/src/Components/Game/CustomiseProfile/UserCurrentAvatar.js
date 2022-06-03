import { Container, Box, Avatar } from "@mui/material";
import blueCar from "../../../AvatarsPictures/blueCar.jpg";

export default function UserCurrentAvatar(props) {
  return (
    <Container align="center">
      <Box align="center" sx={{ justifyContent: "space-between" }}></Box>
      <Avatar src={blueCar} />
      <Box align="center"></Box>
    </Container>
  );
}
