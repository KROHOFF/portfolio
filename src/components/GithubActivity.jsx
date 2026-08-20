import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import Title from "./Title.astro";

export default function GithubGrid({ username }) {
  return (
    <section id="activity" className="max-w-7xl z-50 mx-auto flex flex-col">
      <div class="flex flex-col justify-center items-start text-center">
        <h1 class="text-lg mb-4 tracking-[0.12rem]">[ GitHub Activity ]</h1>
      </div>
      <div className=" w-full mt-10 flex flex-col justify-center items-center">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={15}
          blockMargin={9}
          fontSize={14}
          tooltips={true}
        />
      </div>
      <div className="mt-10">
        <span><a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          Ver mi github
        </a></span>
      </div>
    </section>
  );
}
