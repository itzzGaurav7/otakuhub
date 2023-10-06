import { Box,Avatar } from "@mui/material";
import AvatarGen from "./AvatarGen";

const UserImage = ({ image, name = 'Otaku', size = "60px" }) => {
  if(image != "null"){
    return(
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user" 
        src={`http://localhost:6001/assets/${image}`}
      />
    </Box>)
  }else{
    return(
      <AvatarGen name={name}/>
    );
  }
};

export default UserImage;