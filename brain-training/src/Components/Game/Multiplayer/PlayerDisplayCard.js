import { Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import AvatarOption from "../CustomiseProfile/AvatarOptions";
import { Typography } from "@mui/material";

export default function PlayerDisplayCard(props) {
  function getAvatarLink(avatarID) {
    let chosenAvatar = AvatarOption().find((avatar) => avatar.id === avatarID);
    return chosenAvatar.link;
  }

  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          component="h4"
          display="flex"
          justifyContent="space-between"
        >
          <Avatar
            src={getAvatarLink(props.avatarID)}
            sx={{ height: "10%", width: "10%" }}
          />
          {props.username}: {props.score}
        </Typography>
      </Container>
    </div>
  );
}
