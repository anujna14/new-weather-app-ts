import { Typography , Box, styled} from '@mui/material'
import ImgIcon from "../../assets/icon_nothing.png"

const NoContentFoundContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    alignItems: "center",
    padding: "200px"
  });

  type MessageType = {
    message: string
  }

const NoContentFound = ({message}: MessageType) => {
  return (
    <NoContentFoundContainer>
        <img src={ImgIcon} alt="no result found" style={{marginBottom:"22px"}}/>
        <Typography variant='h6'>{message}</Typography>
    </NoContentFoundContainer>
  )
}

export default NoContentFound