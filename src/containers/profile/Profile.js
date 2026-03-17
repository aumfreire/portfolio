import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    console.log(
      "Profile useEffect running, showGithubProfile:",
      openSource.showGithubProfile
    );
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        console.log("Fetching profile.json...");
        fetch(`${process.env.PUBLIC_URL}/profile.json`)
          .then(result => {
            console.log("Fetch result:", result.status, result.ok);
            if (result.ok) {
              return result.json();
            }
            throw new Error(`HTTP ${result.status}: ${result.statusText}`);
          })
          .then(response => {
            console.log("Profile response:", response);
            if (response && response.data && response.data.user) {
              console.log("Setting profile data:", response.data.user);
              setProfileFunction(response.data.user);
            } else {
              throw new Error("Invalid response structure");
            }
          })
          .catch(function (error) {
            console.error(
              `Profile fetch error: ${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
