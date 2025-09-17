import { useEffect, useState } from "react";

export function useScheduleLoading(initialLoading: boolean, delay: number = 1700) {
  const [scheduleLoading, setScheduleLoading] = useState(initialLoading);

  useEffect(() => {
    if (scheduleLoading) {
      const timer = setTimeout(() => {
        setScheduleLoading(false);
      }, delay);

      return () => clearTimeout(timer); 
    }
  }, [scheduleLoading, delay]);

  return [scheduleLoading, setScheduleLoading] as const;
}
