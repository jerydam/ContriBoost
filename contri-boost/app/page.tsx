"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const Home = () => {
  const //
    { status } = useAccount(),
    { push } = useRouter();
  //
  useEffect(() => {
    status == "connected" ? push("/dash") : null;
  }, [status]);
  return (
    <div className="">
      {/* mainContent */}
      <section className="p-4 flex flex-wrap items-center justify-center w-full text-justify">
        Contriboost: A Simple Guide Welcome! Welcome to the Contriboost! This
        system is a digital Contribution system where everyone Come together to
        contribute something valuable to share. Let me guide you through how it
        works in simple terms. What{"'"}s the Idea? Imagine you{"'"}re
        organizing a community event, and you need everyone to pitch in a little
        something to make it happen. That{"'"}s where the Contribution System
        comes in handy. It{"'"}s a way for people to join in and contribute
        tokens (like digital money) towards a common goal. How Does It Work?
        Joining the Fun: First, anyone who wants to be part of the contribution
        journey can join in. They just need to let us know they{"'"}re joining
        by depositing some tokens. Pitching In: Once they{"'"}ve joined, they
        can contribute tokens whenever they like. There{"'"}s a set amount
        everyone needs to contribute each time. Sharing the Love: When enough
        people have joined and contributed, it{"'"}s time to spread the love!
        The tokens are distributed among all the participants and the person who
        started it all (that{"'"}s you!). Repeat: This process continues until
        we{"'"}ve completed all the rounds we planned. How Can You Get Involved?
        Join: If you want to be part of the fun, just let us know and deposit
        some tokens. Contribute: Whenever you{"'"}re ready, pitch in some tokens
        to help us reach our goal. Celebrate: Once we{"'"}ve gathered enough
        contributions, we{"'"}ll celebrate by sharing the tokens with everyone
        involved. Stay Updated: Keep an eye out for updates on our progress and
        upcoming rounds. Why It{"'"}s Awesome Fairness: Everyone gets a fair
        share based on what they contributed. Community Spirit: It{"'"}s a team
        effort where everyone{"'"}s contribution counts. Transparency: You can
        see exactly where the tokens are going and how they{"'"}re being
        distributed. Conclusion The Contribution System is a simple yet powerful
        way for communities to come together, contribute, and achieve common
        goals. So, come join us, pitch in, and let{"'"}s make something awesome
        together!
      </section>
      <div className="h-20 bg-red-800 invisible"></div>
    </div>
  );
};

export default Home;
