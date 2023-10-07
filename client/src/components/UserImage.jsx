import { Box,Avatar } from "@mui/material";
import AvatarGen from "./AvatarGen";

const UserImage = ({ image, name = 'Otaku', size = "60px" }) => {
  if(image != "null" && image != 'undefined'){
    return(
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user" 
        src={`https://otakuhub-api-eta.vercel.app/assets/${image}`}
      />
    </Box>)
  }else{
    return(
      <AvatarGen name={name}/>
    );
  }
};

export default UserImage;