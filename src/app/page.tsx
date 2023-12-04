"use client";
import { QuestionCard } from "@/components";
import { Container, Header } from "@/components/shared";
import { QuestionServices } from "@/services";
import { words } from "@/strings";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function Home() {
  const { data: response, isLoading } = useQuery(
    "questions",
    QuestionServices.getQuestions
  );

  return (
    <>
      <Header title={words.questionsList} />
      <Container>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h1">{words.loading}</Typography>
          </Box>
        ) : (
          response?.data.map((item) => (
            <QuestionCard
              title={item.title}
              image={item.image}
              description={item.description}
              date={item.date}
              numOfAnswers={item.answers.length}
              questionId={item.id}
              time={item.time}
            />
          ))
        )}
      </Container>
    </>
  );
}
