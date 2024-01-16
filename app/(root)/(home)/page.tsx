import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use TypeScript with React?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "React" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "profile_picture_url",
      clerkId: "clerk1",
    },
    upvotes: ["user1", "user2"],
    views: 1500,
    answers: [
      {
        user: "user3",
        content: "You can use the 'tsx' extension for React components.",
      },
      {
        user: "user4",
        content:
          "TypeScript provides better static typing for React applications.",
      },
    ],
    createdAt: new Date("2024-01-16T08:00:00Z"),
    clerkId: "clerk1",
  },
  {
    _id: "2",
    title: "Best practices for testing Node.js applications?",
    tags: [
      { _id: "tag3", name: "Node.js" },
      { _id: "tag4", name: "Testing" },
    ],
    author: {
      _id: "author2",
      name: "Jane Smith",
      picture: "profile_picture_url",
      clerkId: "clerk2",
    },
    upvotes: ["user5", "user6", "user7"],
    views: 1200,
    answers: [
      {
        user: "user8",
        content: "Use frameworks like Jest for testing Node.js applications.",
      },
      {
        user: "user9",
        content: "Mocking is crucial for isolating components during testing.",
      },
    ],
    createdAt: new Date("2024-01-15T10:30:00Z"),
    clerkId: "clerk2",
  },
  {
    _id: "3",
    title: "How to deploy a MongoDB database on AWS?",
    tags: [
      { _id: "tag5", name: "MongoDB" },
      { _id: "tag6", name: "AWS" },
    ],
    author: {
      _id: "author3",
      name: "Michael Johnson",
      picture: "profile_picture_url",
      clerkId: "clerk3",
    },
    upvotes: ["user10", "user11"],
    views: 800,
    answers: [
      {
        user: "user12",
        content:
          "You can use Amazon DocumentDB for MongoDB compatibility on AWS.",
      },
      {
        user: "user13",
        content: "Consider using AWS Elastic Beanstalk for deploying MongoDB.",
      },
    ],
    createdAt: new Date("2024-01-14T15:45:00Z"),
    clerkId: null,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
}
