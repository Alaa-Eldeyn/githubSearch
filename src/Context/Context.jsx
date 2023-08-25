import React, { useContext, useEffect, useState } from "react";
import mockUser from "./mockUser";
import mockRepos from "./mockRepos";
import mockFollowers from "./mockFollowers";
import axios from "axios";

const AppContext = React.createContext();

const rootURL = `https://api.github.com`;

const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });

  const checkRequest = () => {
    axios
      .get(`${rootURL}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exceed your hourly rate limit.");
        }
      })
      .catch((err) => console.log(err));
  };

  function toggleError(
    show = false,
    msg = "Sorry, you have exceed your hourly rate limit."
  ) {
    setError({ show, msg });
  }

  const searchUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios
      .get(`${rootURL}/users/${user}`)
      .catch((err) => console.log(err));

    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      await Promise.allSettled([
        axios.get(`${rootURL}/users/${login}/repos?per_page=100`),
        axios.get(`${followers_url}`),
      ]).then((results) => {
        const [repos, followers] = results;
        if (repos.status === "fulfilled") {
          setRepos(repos.value.data);
        }
        if (followers.status === "fulfilled") {
          setFollowers(followers.value.data);
        }
      });
    }
    checkRequest();
    setLoading(false);
  };

  useEffect(() => {
    checkRequest();
  }, []);

  return (
    <AppContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        loading,
        requests,
        checkRequest,
        error,
        searchUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
