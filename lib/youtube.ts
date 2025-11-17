import { YouTubeVideo } from './types';

// This function would fetch videos from YouTube API
// For now, it returns mock data, but you can replace it with actual API calls
export async function fetchYouTubeVideos(
  channelId: string = '@adevtutorials',
  maxResults: number = 3
): Promise<YouTubeVideo[]> {
  // In production, you would use the YouTube Data API v3
  // Example:
  // const API_KEY = process.env.YOUTUBE_API_KEY;
  // const response = await fetch(
  //   `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
  // );
  // const data = await response.json();
  // return data.items.map(item => ({
  //   id: item.id.videoId,
  //   title: item.snippet.title,
  //   description: item.snippet.description,
  //   thumbnail: item.snippet.thumbnails.high.url,
  //   duration: 'TBD', // Would need additional API call
  //   views: 'TBD', // Would need additional API call
  //   url: `https://youtube.com/watch?v=${item.id.videoId}`
  // }));

  // For now, return mock data
  return []
}

// To use the YouTube Data API v3, you would need to:
// 1. Get an API key from Google Cloud Console
// 2. Enable the YouTube Data API v3
// 3. Add the API key to your .env.local file as YOUTUBE_API_KEY
// 4. Uncomment the fetch logic above and remove the mock data
