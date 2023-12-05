// node_modules
import Link from "next/link";
// Design system
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
// Components
import { AnswerIcon, Couple, Divider } from "@/components";
// Strings
import { words } from "@/strings";

interface IQuestionCardProps {
  title: string;
  image: string;
  description: string;
  time: string;
  date: string;
  numOfAnswers: number;
  questionId: string | number;
  showButton?: boolean;
}

const QuestionCard = (props: IQuestionCardProps) => {
  const theme = useTheme();
  const {
    title,
    description,
    image,
    time,
    date,
    numOfAnswers,
    questionId,
    showButton = true,
  } = props;

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
          <Avatar src={image} alt={title} />
          <Typography variant="h2" color={theme.palette.colors.naturalsBlack}>
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="28px">
          <Box display="flex" alignItems="center" gap="12px">
            <Couple keyWord={words.time} value={time} />
            <Divider />
            <Couple keyWord={words.date} value={date} />
          </Box>
          <Box display="flex" alignItems="center" gap="4px">
            <AnswerIcon />
            <Typography variant="h6" color={theme.palette.colors.grayDark}>
              {numOfAnswers}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box padding="20px 16px" display="flex">
        <Typography variant="h5">{description}</Typography>
        {showButton && (
          <Box
            sx={{
              marginTop: "16px",
              marginRight: "auto",
              justifySelf: "start",
            }}
          >
            <Link passHref href={`/question/${questionId}`}>
              <Button variant="outlined" color="success">
                {words.seeDetails}
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default QuestionCard;
