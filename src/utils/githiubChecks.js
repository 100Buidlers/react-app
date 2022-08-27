import axios from "axios";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

export const getIssuesForRepo = async (owner, repo) => {
  return await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner,
    repo,
    per_page: 2,
    sort: "updated",
    direction: "asc",
  });
};

export const getPrInfo = async (owner, repo, pull_number) => {
  return await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}",
    {
      owner,
      repo,
      pull_number,
    }
  );
};

export const tweetLookup = async (id) => {
  return await axios.get("http://localhost:3001/tweet-on-id", {
    id,
  });
};
