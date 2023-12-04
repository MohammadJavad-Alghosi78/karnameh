"use client";
import { words } from "@/strings";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

interface IQuestionCardProps {
  title: string;
  image: string;
  description: string;
  time: string;
  date: string;
  numOfAnswers: number;
  questionId: string;
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
        boxShadow:
          "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);",
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
            <Box display="flex" alignItems="center" gap="4px">
              <Typography variant="body1" color={theme.palette.colors.grayDark}>
                {words.time}:
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.colors.naturalsBlack}
              >
                {time}
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                width: "1px",
                height: "24px",
                background: `${theme.palette.colors.naturalsWhite}10`,
              }}
            />
            <Box display="flex" alignItems="center" gap="4px">
              <Typography variant="body1" color={theme.palette.colors.grayDark}>
                {words.date}:
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.colors.naturalsBlack}
              >
                {date}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="4px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.75 2C5.02208 2 2 5.02208 2 8.75C2 9.43791 2.14554 10.1468 2.35732 10.8091L2.36068 10.8196C2.57868 11.5014 2.74647 12.0261 2.86295 12.4222C2.97485 12.8028 3.05981 13.1293 3.08134 13.3849C3.10678 13.6867 3.12001 13.9487 3.08147 14.2236C3.04294 14.4985 2.9582 14.7467 2.85076 15.0299C2.79524 15.1763 2.71923 15.3302 2.6228 15.5H8.75C12.4779 15.5 15.5 12.4779 15.5 8.75C15.5 5.02208 12.4779 2 8.75 2ZM0.631647 15.8254C0.548607 15.9462 0.5 16.0924 0.5 16.25C0.5 16.6642 0.835786 17 1.25 17H8.75C13.3063 17 17 13.3063 17 8.75C17 4.19365 13.3063 0.5 8.75 0.5C4.19365 0.5 0.5 4.19365 0.5 8.75C0.5 9.63943 0.686196 10.5079 0.928582 11.2659C1.15063 11.9604 1.31298 12.4683 1.42388 12.8454C1.53994 13.2401 1.57966 13.4281 1.58664 13.5109C1.61071 13.7964 1.60979 13.9169 1.59599 14.0154C1.58219 14.1138 1.54994 14.2299 1.44829 14.4979C1.3664 14.7137 1.17416 15.0116 0.631647 15.8254Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66675 7.08334C4.66675 6.66913 5.00253 6.33334 5.41675 6.33334H12.0834C12.4976 6.33334 12.8334 6.66913 12.8334 7.08334C12.8334 7.49756 12.4976 7.83334 12.0834 7.83334H5.41675C5.00253 7.83334 4.66675 7.49756 4.66675 7.08334Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66675 10.4167C4.66675 10.0024 5.00253 9.66666 5.41675 9.66666H8.75008C9.16429 9.66666 9.50008 10.0024 9.50008 10.4167C9.50008 10.8309 9.16429 11.1667 8.75008 11.1667H5.41675C5.00253 11.1667 4.66675 10.8309 4.66675 10.4167Z"
                fill="#9CAEBB"
              />
            </svg>
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
              <Button variant="outlined">{words.seeDetails}</Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default QuestionCard;
