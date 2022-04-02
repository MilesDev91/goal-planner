import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import buildCalendar from "../../../helpers/buildCalendar";

export default function Calendar(): JSX.Element {
  const [calendar, setCalendar] = useState<moment.Moment[][]>([]);
  const [selectedMoment, setSelectedMoment] = useState<moment.Moment>(moment());

  useEffect(() => {
    const tempCal = buildCalendar(selectedMoment);

    setCalendar(tempCal);
  }, [selectedMoment]);

  function background(day: moment.Moment) {
    if (day.isSame(selectedMoment, "day")) {
      return "highlight.main";
    } else if (day.isBefore(new Date(), "day")) {
      return "grayed.main";
    } else if (day.isSame(new Date(), "day")) {
      return "highlight.light";
    } else {
      return "inherit";
    }
  }

  return (
    <Box textAlign="center" m="auto">
      <Typography m={2} variant="h5">
        {selectedMoment.format("MMMM")} {selectedMoment.format("YYYY")}
      </Typography>
      {calendar.map((week, index) => (
        <Box
          sx={{
            display: "flex",
            borderBottom:
              index == calendar.length - 1 ? "1px solid black" : "none",
          }}
          key={index}
        >
          {week.map((day, index) => (
            <Box
              sx={{
                display: "flex",
                width: 150,
                height: 150,
                borderLeft: "1px solid black",
                borderTop: "1px solid black",
                borderRight: index == 6 ? "1px solid black" : "none",
                backgroundColor: background(day),
                color: day.isBefore(new Date(), "day") ? "gray" : "inherit",
              }}
              key={index}
              onClick={() => setSelectedMoment(day)}
            >
              <Typography m={1}>{day.format("D")}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
