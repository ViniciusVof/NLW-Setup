import { useEffect, useState } from "react";
import { generateDatesFromYearBeginning } from "../../utils/generateDatesFromYearBeginning";
import { HabitDay } from "../HabitDay";
import { api } from "../../lib/axios";
import dayjs from "dayjs";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimalSummaryDatesSize = 18 * 7;

const amountOfDaysToFill = minimalSummaryDatesSize - summaryDates.length;

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get("/summary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, "day");
          });

          return (
            <HabitDay
              key={date.toString()}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
              date={date}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({
            length: amountOfDaysToFill,
          }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}
