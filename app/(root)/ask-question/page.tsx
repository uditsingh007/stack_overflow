import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "user123";
  if (!userId) redirect("/sign-in");
  const user = await getUserById({ userId });
  console.log(user, "user");
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(user._id)} />
      </div>
    </div>
  );
};

export default Page;
