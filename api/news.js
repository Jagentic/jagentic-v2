export default async function handler(req, res) {
    const YOUTUBE_CHANNELS = [
        { name: "Andrej Karpathy", id: "UCCNb8Rlcfr7pvop9W-QJk6A" },
        { name: "Two Minute Papers", id: "UCbfYPySNq-Nf4DOEoEKXw_w" },
        { name: "AI Explained", id: "UC-t_dJ_1G1C3c8E7w2n9wDw" }
    ];

    try {
        // 1. Fetch YouTube RSS Feeds
        const ytPromises = YOUTUBE_CHANNELS.map(async (channel) => {
            try {
                const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`);
                const text = await response.text();

                // Simple Regex Parse for the latest video
                const entryMatch = text.match(/<entry>([\s\S]*?)<\/entry>/);
                if (!entryMatch) return null;

                const entry = entryMatch[1];
                const titleMatch = entry.match(/<title>(.*?)<\/title>/);
                const linkMatch = entry.match(/href="(.*?)"/);

                if (titleMatch && linkMatch) {
                    return {
                        source: `YouTube / ${channel.name}`,
                        title: titleMatch[1],
                        url: linkMatch[1],
                        type: 'video'
                    };
                }
            } catch (e) {
                console.error(`Failed to fetch YT for ${channel.name}`, e);
                return null;
            }
        });

        // 2. Fetch Hacker News Top Stories
        const hnPromise = (async () => {
            try {
                const topIdsRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
                const topIds = await topIdsRes.json();
                const top5 = topIds.slice(0, 5);

                const storyPromises = top5.map(id =>
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
                );

                const stories = await Promise.all(storyPromises);
                return stories.map(story => ({
                    source: "Hacker News",
                    title: story.title,
                    url: `https://news.ycombinator.com/item?id=${story.id}`,
                    type: 'article'
                }));
            } catch (e) {
                console.error("Failed to fetch HN", e);
                return [];
            }
        })();

        const [ytResults, hnResults] = await Promise.all([
            Promise.all(ytPromises),
            hnPromise
        ]);

        // Filter nulls and combine
        const validYt = ytResults.filter(item => item !== null);
        const allNews = [...validYt, ...hnResults];

        // Shuffle
        const shuffled = allNews.sort(() => 0.5 - Math.random());

        res.status(200).json(shuffled);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
}
