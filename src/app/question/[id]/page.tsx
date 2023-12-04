"use client";
import { AnswerCard, QuestionCard } from "@/components";
import { Container, Header } from "@/components/shared";
import { words } from "@/strings";
import { Box, Typography, useTheme } from "@mui/material";

const Question = () => {
  const theme = useTheme();
  return (
    <>
      <Header title={words.questionDetails} />
      <Container>
        <QuestionCard
          title="مشکل در Auth در React"
          image=""
          description="سلام من میخوام یه noitacitnehtua ساده تو tcaer بسازم اما این rorre رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی elosnoc رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره"
          date="۱۴۰۰/۲/۱۵ "
          numOfAnswers={20}
          questionId="1"
          time="۱۶:۴۸"
          showButton={false}
        />
        <Box marginTop="24px">
          <Typography
            marginBottom="16px"
            variant="h1"
            color={theme.palette.colors.naturalsBlack}
          >
            {words.answers}
          </Typography>
          <AnswerCard
            name="علی کیا"
            image=""
            answer="متغیر VNE رو توی فایلت تغییر بده درست میشه"
            date="۱۴۰۰/۲/۱۵"
            time="۱۶:۴۸"
            answerId=""
            likes={25}
            disLikes={2}
          />
        </Box>
      </Container>
    </>
  );
};

export default Question;
