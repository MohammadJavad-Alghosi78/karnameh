// Design system
import { useTheme, Box, Avatar, Typography, Button } from "@mui/material";
// Components
import { LikeIcon, DisLikeIcon, Couple, Divider } from "@/components";
// Strings
import { words } from "@/strings";

interface IAnswerCardProps {
  name: string;
  image: string;
  answer: string;
  time: string;
  date: string;
  likes: number;
  disLikes: number;
  onLike: () => void;
  onDisLike: () => void;
}

const AnswerCard = (props: IAnswerCardProps) => {
  const {
    name,
    image,
    answer,
    time,
    date,
    likes,
    disLikes,
    onLike,
    onDisLike,
  } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "8px",
        backgroundColor: theme.palette.colors.grayLightest,
        boxShadow: theme.shadows[1],
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.colors.naturalsWhite,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
        }}
      >
        <Box display="flex" alignItems="center" gap="16px">
          <Avatar src={image} alt={name} />
          <Typography variant="h2" color={theme.palette.colors.naturalsBlack}>
            {name}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="60px">
          <Box display="flex" alignItems="center" gap="12px">
            <Couple keyWord={words.time} value={time} />
            <Divider />
            <Couple keyWord={words.date} value={date} />
          </Box>
          <Box display="flex" alignItems="center" gap="16px">
            <Box display="flex" alignItems="center" gap="4px">
              <LikeIcon />
              <Typography variant="h6" color={theme.palette.colors.grayDark}>
                {likes}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="4px">
              <DisLikeIcon />
              <Typography variant="h6" color={theme.palette.colors.grayDark}>
                {disLikes}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding="20px 16px" display="flex">
        <Typography variant="h5">{answer}</Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="12px"
          sx={{
            marginTop: "16px",
            marginRight: "auto",
            justifySelf: "start",
          }}
        >
          <Button
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            variant="outlined"
            color="success"
            startIcon={<LikeIcon />}
            onClick={onLike}
          >
            {words.goodAnswer}
          </Button>
          <Button
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            variant="outlined"
            color="error"
            startIcon={
              <DisLikeIcon color={theme.palette.colors.annotationsError} />
            }
            onClick={onDisLike}
          >
            {words.badAnswer}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AnswerCard;
