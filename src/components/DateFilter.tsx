
import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface DateFilterProps {
  selectedDate: string | null;
  onSelectDate: (date: string | null) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ selectedDate, onSelectDate }) => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Button
          variant={selectedDate === "today" ? "default" : "outline"}
          size="sm"
          className={selectedDate === "today" ? "bg-rose-100 text-rose-600 hover:bg-rose-200 border border-rose-200" : ""}
          onClick={() => onSelectDate("today")}
        >
          Today
        </Button>
        <Button
          variant={selectedDate === "tomorrow" ? "default" : "outline"}
          size="sm"
          className={selectedDate === "tomorrow" ? "bg-rose-100 text-rose-600 hover:bg-rose-200 border border-rose-200" : ""}
          onClick={() => onSelectDate("tomorrow")}
        >
          Tomorrow
        </Button>
        <Button
          variant={selectedDate === "weekend" ? "default" : "outline"}
          size="sm"
          className={selectedDate === "weekend" ? "bg-rose-100 text-rose-600 hover:bg-rose-200 border border-rose-200" : ""}
          onClick={() => onSelectDate("weekend")}
        >
          This Weekend
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="date-range" />
        <Label htmlFor="date-range" className="text-sm font-normal text-gray-700">Date Range</Label>
      </div>
    </div>
  );
};

export default DateFilter;
