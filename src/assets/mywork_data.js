/**
 * My Work Data Module
 * Represents the portfolio of completed projects with detailed information and visuals.
 */

// Import each image individually from the assets folder
import weatherImg from '../assets/weather.jpeg';
import movieImg from '../assets/movie.jpeg';
import blogImg from '../assets/blog.jpeg';
import todolistImg from '../assets/todolist.jpeg';
import youtubeImg from '../assets/youtube.jpeg';
import lulitsspaImg from '../assets/lulitsspa.png';

// My work data with imported images and URLs
export const mywork_data = [
    {
        w_no: "01",
        w_name: "Weather Dashboard",
        w_img: weatherImg,
        w_desc: "Designed a real-time weather dashboard application, offering dynamic weather updates and user-friendly interface.",
        url: "https://example.com/weather-dashboard" // Add your actual URL here
    },
    {
        w_no: "02",
        w_name: "Movie Recommendation System",
        w_img: movieImg,
        w_desc: "Developed a movie recommendation system that utilizes user preferences and viewing history to suggest films.",
        url: "https://example.com/movie-recommendation" // Add your actual URL here
    },
    {
        w_no: "03",
        w_name: "Personal Blog",
        w_img: blogImg,
        w_desc: "Developed a versatile blogging platform focused on content management and integrated social sharing options.",
        url: "https://example.com/personal-blog" // Add your actual URL here
    },
    {
        w_no: "04",
        w_name: "Task Management App",
        w_img: todolistImg,
        w_desc: "Created a task management application allowing users to organize tasks efficiently.",
        url: "https://example.com/task-management" // Add your actual URL here
    },
    {
        w_no: "05",
        w_name: "YouTube Analytics Tool",
        w_img: youtubeImg,
        w_desc: "Engineered a YouTube analytics tool providing insights into video performance.",
        url: "https://example.com/youtube-analytics" // Add your actual URL here
    },
    {
        w_no: "06",
        w_name: "Massage Therapy Website",
        w_img: lulitsspaImg,
        w_desc: "Built an engaging website for a massage therapy business, featuring service descriptions and a booking system.",
        url: "https://www.lulitsspa.com/" // Add your actual URL here
    }
];

