"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaPlayCircle,
  FaCode,
  FaUtensils,
  FaChalkboardTeacher,
  FaUpload,
  FaTrophy,
  FaGamepad,
  FaGavel,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const schedule = [
    {
      time: "09:00 AM - 10:00 AM",
      date: "2025-03-08",
      title: "Registration and Check-in",
      description: "Register and get ready for the ultimate coding challenge.",
      icon: <FaUserCheck className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "10:30 AM - 11:00 AM",
      date: "2025-03-08",
      title: "Opening Ceremony",
      description: "Kickstart the event with our hosts and keynote speakers.",
      icon: <FaPlayCircle className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "11:00 AM - 01:30 PM",
      date: "2025-03-08",
      title: "Coding Time",
      description: "Participants start hacking and working on their projects.",
      icon: <FaCode className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "01:30 PM - 02:30 PM",
      date: "2025-03-08",
      title: "Lunch Break",
      description: "Take a break, grab some food, and recharge.",
      icon: <FaUtensils className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "02:30 PM - 05:00 PM",
      date: "2025-03-08",
      title: "Coding Time",
      description: "Continue developing your projects with your team.",
      icon: <FaCode className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "05:00 PM - 06:00 PM",
      date: "2025-03-08",
      title: "Evening Tea and Snacks",
      description: "Enjoy some snacks and refreshments.",
      icon: <FaUtensils className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "06:00 PM - 08:00 PM",
      date: "2025-03-08",
      title: "Mentoring Round 1",
      description: "Get expert guidance and refine your project.",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "08:00 PM - 09:00 PM",
      date: "2025-03-08",
      title: "Dinner Break",
      description: "Take a break, grab some food, and recharge.",
      icon: <FaUtensils className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "09:00 PM - 11:30 PM",
      date: "2025-03-08",
      title: "Coding Time",
      description: "Continue building your project late into the night.",
      icon: <FaCode className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "11:30 PM - 01:00 AM",
      date: "2025-03-09",
      title: "Game and Masti Time",
      description: "Unwind with fun games and activities.",
      icon: <FaGamepad className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "01:00 AM - 7:00 AM",
      date: "2025-03-09",
      title: "Coding Time",
      description: "Push through the night and complete your project.",
      icon: <FaCode className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "07:00 AM - 08:00 AM",
      date: "2025-03-09",
      title: "Breakfast",
      description: "Enjoy a morning meal to fuel up for the final stretch.",
      icon: <FaUtensils className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "08:00 AM - 10:00 AM",
      date: "2025-03-09",
      title: "Mentoring Round 2",
      description: "Final mentoring session to polish your project.",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "11:00 AM",
      date: "2025-03-09",
      title: "Top 10 Announcement",
      description: "Announcement of the top 10 teams moving to final judging.",
      icon: <FaTrophy className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "11:30 AM - 02:00 PM",
      date: "2025-03-09",
      title: "Final Judgement Round",
      description: "Final presentations and evaluation by judges.",
      icon: <FaGavel className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "02:00 PM - 03:00 PM",
      date: "2025-03-09",
      title: "Lunch",
      description: "Enjoy a well-deserved meal before the final ceremonies.",
      icon: <FaUtensils className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "03:00 PM - 04:00 PM",
      date: "2025-03-09",
      title: "Felicitation Ceremony",
      description: "Recognizing the top teams and winners.",
      icon: <FaAward className="w-6 h-6 text-pink-500" />,
    },
    {
      time: "04:00 PM - 05:00 PM",
      date: "2025-03-09",
      title: "Closing Ceremony",
      description: "Wrap-up and bid farewell to an amazing hackathon.",
      icon: <FaHandshake className="w-6 h-6 text-pink-500" />,
    }
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const convertToIndianTime = (dateString: string, timeString: string) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = String(Number(hours) + 12);
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    const dateTimeString = `${dateString}T${hours}:${minutes}:00`;
    const date = new Date(dateTimeString);

    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const convertToIndianDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const calculateProgress = () => {
    const now = currentTime.getTime();
    const firstEventTime = new Date(`${schedule[0].date}T${schedule[0].time}`).getTime();
    const lastEventTime = new Date(
      `${schedule[schedule.length - 1].date}T${schedule[schedule.length - 1].time}`
    ).getTime();

    if (now < firstEventTime) return 0;
    if (now > lastEventTime) return 100;

    const totalDuration = lastEventTime - firstEventTime;
    const elapsedTime = now - firstEventTime;
    return (elapsedTime / totalDuration) * 100;
  };

  const progress = calculateProgress();

  return (
    <div className="relative overflow-hidden w-full py-12 px-4 sm:px-6 pt-20 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold font-squid-game text-center mb-8 uppercase ">
        Event <span className="text-pink-600">Schedule</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gray-800">
          {/* Progress Indicator */}
          <motion.div
            className="absolute top-0 left-0 w-1 bg-pink-500"
            style={{ height: `${progress}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {schedule.map((event, index) => {
          const eventDateTime = new Date(`${event.date}T${event.time}`);
          const isPast = eventDateTime.getTime() < currentTime.getTime();
          const isActive =
            currentTime.getTime() >= eventDateTime.getTime() &&
            currentTime.getTime() <
              new Date(`${schedule[index + 1]?.date}T${schedule[index + 1]?.time}`).getTime();

          return (
            <motion.div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center mb-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Event Time and Date */}
              <div className="w-1/2 px-4 text-right">
                <p className="text-lg font-bold text-pink-600">
                  {convertToIndianTime(event.date, event.time)} IST
                </p>
                <p className="text-sm text-gray-400">
                  {convertToIndianDate(event.date)}
                </p>
              </div>

              {/* Event Icon */}
              <motion.div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  isPast ? "border-gray-600 bg-gray-800" : "border-white bg-gray-900"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {event.icon}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
                )}
              </motion.div>

              {/* Event Details */}
              <div className="w-1/2 px-4">
                <motion.div
                  className={`p-6 rounded-lg shadow-lg ${
                    isPast
                      ? "bg-gray-800 border-gray-600 opacity-50"
                      : isActive
                      ? "bg-pink-800 border-white"
                      : "bg-gray-900 border-gray-700"
                  } border-2`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;