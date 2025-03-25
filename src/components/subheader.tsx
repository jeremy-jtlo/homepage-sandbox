import React from "react";
import { Header } from "semantic-ui-react";

/**
 * Sub header renders a clock. Requires a Date object to do so.
 */
export type SubHeaderProps = { time: Date };

/**
 * Renders the Date in readable english
 * @param time A JS Date object
 */
const generateDateString = (time: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const thisMonth = time.getMonth();
  const dayOfMonth = time.getDate();
  const dayName = time.getDay();

  return `${dayNames[dayName]}, ${monthNames[thisMonth]} ${dayOfMonth}`;
};

export default function SubHeader({ time }: SubHeaderProps) {
  return <Header as="h3">{generateDateString(time)}</Header>;
}
