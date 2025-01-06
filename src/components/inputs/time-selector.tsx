import { DateTime } from "luxon";
import { TimeUnitType } from "calender-types";
import { Menu } from "@mantine/core";
import { timeSelectorStyles } from "./input.css";

const TimeSelector = ({
  time,
  setTime,
  minTime,
  maxTime,
  unit,
}: {
  time: string;
  setTime: (newTime: string) => void;
  minTime?: string;
  maxTime?: string;
  unit: TimeUnitType;
}) => {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const minutes = [0, 30];
  const timeValue = DateTime.fromFormat(time, "HH:mm:ss");

  function setHour(hour: number) {
    const newTimeValue = timeValue.set({ hour });
    setTime(newTimeValue.toFormat("HH:mm:ss"));
  }

  function setMinute(minute: number) {
    const newTimeValue = timeValue.set({ minute });
    setTime(newTimeValue.toFormat("HH:mm:ss"));
  }

  function checkAbility(hour: number, minute: number) {
    return (
      (!minTime ||
        DateTime.fromObject({ hour, minute }) >
          DateTime.fromFormat(minTime, "HH:mm:ss")) &&
      (!maxTime ||
        DateTime.fromObject({ hour, minute }) <
          DateTime.fromFormat(maxTime, "HH:mm:ss"))
    );
  }

  function formatHour(hour: number) {
    const hourValue = DateTime.fromObject({ hour, minute: 0 });
    return unit === "SIXTY_MINUTES"
      ? hourValue.toFormat("HH:mm")
      : hourValue.toFormat("HH");
  }

  return (
    <Menu closeOnItemClick={false} withArrow position="bottom">
      <Menu.Target>
        <button className={timeSelectorStyles.container} type="button">
          {timeValue.toFormat("HH:mm")}
        </button>
      </Menu.Target>
      <Menu.Dropdown className={timeSelectorStyles.dropdown}>
        <div className={timeSelectorStyles.list}>
          <div>
            {hours
              .filter((hour) => checkAbility(hour, timeValue.minute))
              .map((hour) => (
                <Menu.Item
                  key={hour}
                  autoFocus={hour === timeValue.hour}
                  onClick={() => setHour(hour)}
                  className={
                    hour === timeValue.hour
                      ? timeSelectorStyles.selectedValue
                      : undefined
                  }
                >
                  <span>{formatHour(hour)}</span>
                </Menu.Item>
              ))}
          </div>
        </div>
        {unit === "THIRTY_MINUTES" && (
          <div className={timeSelectorStyles.list}>
            <div>
              {minutes
                .filter((minute) => checkAbility(timeValue.hour, minute))
                .map((minute) => (
                  <Menu.Item
                    key={minute}
                    onClick={() => setMinute(minute)}
                    className={
                      minute === timeValue.minute
                        ? timeSelectorStyles.selectedValue
                        : undefined
                    }
                  >
                    <span>{minute === 0 ? "00" : minute}</span>
                  </Menu.Item>
                ))}
            </div>
          </div>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default TimeSelector;
