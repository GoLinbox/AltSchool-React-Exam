import React, { useEffect, useState } from "react";
import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged } from "../config";

function Page1() {

    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null);
  // Handle Sign-In in firebase...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
    };

    //Handle sign out...
    const signOut = (event) => {
      event.preventDefault();
        auth.signOut().then(() => {
          alert("Signed Out");
      });
    };
    
    // Get redirect result...
    useEffect(() => {
       getRedirectResult(auth)
         .then((result) => {
           //Get result...
           if (result) {
             console.log(result.user);
             //Set result
             setSignedIn(true);
           } else {
             //...
           }
         })
         .catch((error) => {
           // Log error
           console.log(error);
         });

    }, []);

    //Get auth state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, photoURL, uid } = user;
                setUser({displayName, email, photoURL, uid});
          } else {
            // User is signed out
            setUser(null);
          }
        });
    }, [])

  return (
    <section className="main">
      {user ? (
        <div>
          <div className="Header">
            <div className="text">
              <div style={signedIn ? {} : { display: "none" }}>
                              Welcome, <div>{user.displayName }. You are signed in!</div>
              </div>
              <h1>Worlds' Biggest Email Marketing Agency</h1>
              <p>
                Start a project with us today and get your first email coded for
                free
              </p>
              <button onClick={signOut} className="button">
                <div>Sign Out</div> <p>‣</p>
              </button>
            </div>
            <div className="img">
              <img src={"/Logo/Header Img.png"} alt="" title="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="Header">
          <div className="text">
            <div style={signedIn ? {} : { display: "none" }}>
              Sign Out Success
            </div>
            <h1>Worlds' Biggest Email Marketing Agency</h1>
            <p>
              Start a project with us today and get your first email coded for
              free
            </p>
            <button onClick={signIn} className="button">
              <div>Try For FREE</div> <p>‣</p>
            </button>
          </div>
          <div className="img">
            <img src={"/Logo/Header Img.png"} alt="" title="" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Page1;
