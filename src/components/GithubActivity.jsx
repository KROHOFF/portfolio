import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import Title from "./Title.astro";

export default function GithubGrid({ username }) {
  return (
    <section id="activity" className="max-w-7xl z-50 mx-auto flex flex-col md:py-10">
      <div class="flex flex-col justify-center items-start text-center ms-5 md:ms-0">
        <h1 class="text-lg mb-4 md:mb-6 tracking-[0.12rem]">[ GitHub Activity ]</h1>
      </div>
      <div className="relative  w-full grayscale-100  md:w-full mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          blockSize={15}
          blockMargin={9}
          fontSize={14}
          tooltips={true}
        />
      </div>
      <div className="mt-5  md:mt-8">
        <span><a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          Ver mi github
        </a></span>
      </div>
    </section>
  );
}
