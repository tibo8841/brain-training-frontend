import { getProfile } from "./Networking";
import { Box, Container } from "@mui/system";

export default function PlayerDisplayCard() {
  async function fetchProfilePicture() {
    const profile = await getProfile(2);
    return profile.user.profile_picture_id;
  }
  async function fetchProfileUsername() {
    const profile = await getProfile(2);
    return profile.user.username;
  }

  // async function fetchWinMessage() {
  //   const profile = await getProfile(2);
  //   return profile.user.win_message;
  // }

  return (
    <div>
      <Container>
        <Box sx={{ justifyContent: "space-between", width: 300, height: 200 }}>
          {`${fetchProfilePicture()} ${fetchProfileUsername()} `}
        </Box>
      </Container>
    </div>
  );
}
