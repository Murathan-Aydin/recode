"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getTweets();
    }, []);

    const getTweets = async () => {
        const reponse = await fetch("/api/", {
            method: "GET",
        });
        const data = await reponse.json();

        console.log(data);
        

        setTweets(data);
    }

    const submitTweet =  async (e: any) => {
        e.preventDefault();

        const response = await fetch("/api/", {
            method: "POST",
            body: JSON.stringify({
                tweet: tweet,
            }),
        });
        const data = await response.json();
        console.log(data);
    };

    const handleChange = (e: any) => {
        setTweet(e.target.value);
    };

    return (
        <>
            <form onSubmit={submitTweet} action="">
                <input
                    name="tweet"
                    value={tweet}
                    onChange={handleChange}
                    type="text"
                    placeholder="tweet"
                />
                <button type="submit">Tweet</button>
            </form>
        </>
    );
}
