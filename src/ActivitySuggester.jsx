import React from 'react';
import './ActivitySuggester.css';

const ActivitySuggester = ({ weather }) => {
    const suggestions = {
      "clear sky": [
        "Start your morning with a jog or gym session.",
        "It's a great day to study or work outdoors.",
        "Go for an evening walk to relax after work."
      ],
      "few clouds": [
        "Perfect weather for light exercise or yoga.",
        "Take a short walk during your break.",
        "Catch up with friends or work on a small project."
      ],
      "scattered clouds": [
        "Do a focused study or work session indoors.",
        "Visit the gym or stretch to refresh your mind.",
        "Listen to some music while working."
      ],
      "broken clouds": [
        "Complete important tasks before the weekend.",
        "Do a home workout or yoga session.",
        "Plan your goals for the week ahead."
      ],
      "overcast clouds": [
        "Stay productive indoors with study or project work.",
        "Do some gentle stretching or meditation.",
        "Have a warm drink and take a short break."
      ],
      "light rain": [
        "Try yoga or bodyweight workouts at home.",
        "Study or work beside a window and enjoy the calm weather.",
        "Read or watch something informative."
      ],
      "rain": [
        "Good time for a quiet yoga or stretching session.",
        "Finish pending study or work tasks.",
        "Watch an educational video or documentary."
      ],
      "shower rain": [
        "Stay indoors and do a light home workout.",
        "Organize your study materials or workspace.",
        "Relax with some music or journaling."
      ],
      "thunderstorm": [
        "Stay indoors and practice deep breathing or meditation.",
        "Plan your schedule for the coming week.",
        "Learn something new online."
      ],
      "mist": [
        "Go for a peaceful morning walk if it’s safe.",
        "Start your day with meditation or journaling.",
        "Focus on small, achievable tasks today."
      ],
      "haze": [
        "Avoid outdoor workouts; do indoor stretching instead.",
        "Work on assignments or personal goals.",
        "Take short breaks to stay refreshed."
      ],
      "smoke": [
        "Stay indoors and do light stretching or yoga.",
        "Read or learn something new online.",
        "Keep hydrated and rest well."
      ],
      "dust": [
        "Avoid going out and focus on indoor productivity.",
        "Do a short mindfulness or breathing session.",
        "Tidy your room or organize digital files."
      ],
      "sand": [
        "Stay indoors and do a short workout or meditation.",
        "Watch or learn something educational.",
        "Plan your fitness or study schedule."
      ],
      "fog": [
        "Be cautious while traveling or driving.",
        "Warm up with coffee and do a quick stretch.",
        "Focus on your core study or work tasks today."
      ],
      "drizzle": [
        "Do an indoor yoga or stretching routine.",
        "Catch up on reading or work on personal projects.",
        "Take some quiet time to relax and recharge."
      ],
    };

    const getActivity = () => {
        const weatherCondition = weather.toLowerCase();
        for (const key in suggestions) {
            if (weatherCondition.includes(key)) {
                const activityList = suggestions[key];
                return activityList[Math.floor(Math.random() * activityList.length)];
            }
        }
        return "No suggestions for this weather.";
    };

    return (
        <div className="activity-suggester">
            <h3>Activity Suggestion</h3>
            <p>{getActivity()}</p>
        </div>
    );
};

export default ActivitySuggester;