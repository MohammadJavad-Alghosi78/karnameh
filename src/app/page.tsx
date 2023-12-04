"use client";
import { QuestionCard } from "@/components";
import { Container, Header } from "@/components/shared";
import { words } from "@/strings";

export default function Home() {
  return (
    <>
      <Header title={words.questionsList} />
      <Container>
        <QuestionCard
          title="مشکل در Auth در React"
          image=""
          description="سلام من میخوام یه noitacitnehtua ساده تو tcaer بسازم اما این rorre رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی elosnoc رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره"
          date="۱۴۰۰/۲/۱۵ "
          numOfAnswers={20}
          questionId="1"
          time="۱۶:۴۸"
        />
        <QuestionCard
          title="مشکل در Auth در React"
          image=""
          description="سلام من میخوام یه noitacitnehtua ساده تو tcaer بسازم اما این rorre رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی elosnoc رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره"
          date="۱۴۰۰/۲/۱۵ "
          numOfAnswers={20}
          questionId="2"
          time="۱۶:۴۸"
        />
        <QuestionCard
          title="مشکل در Auth در React"
          image=""
          description="سلام من میخوام یه noitacitnehtua ساده تو tcaer بسازم اما این rorre رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی elosnoc رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره"
          date="۱۴۰۰/۲/۱۵ "
          numOfAnswers={20}
          questionId="3"
          time="۱۶:۴۸"
        />
        <QuestionCard
          title="مشکل در Auth در React"
          image=""
          description="سلام من میخوام یه noitacitnehtua ساده تو tcaer بسازم اما این rorre رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی elosnoc رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره"
          date="۱۴۰۰/۲/۱۵ "
          numOfAnswers={20}
          questionId="4"
          time="۱۶:۴۸"
        />
      </Container>
    </>
  );
}
