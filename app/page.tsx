import { useState, useEffect } from "react";

export default function Home() {
    const [tweet, setTweet] = useState("");

    useEffect(() => {
        
    }, []);

    const submitTweet =  async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/submit", {
            method: "POST",
            body: formData,
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
