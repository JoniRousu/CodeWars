function formatDuration (seconds) {
    let duration = seconds;
    let minute = 60;
    let hour = 60 * minute;
    let day = 24 * hour;
    let year = 365 * day;

    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let _seconds = 0;

    if (seconds === 0) {
        return "now";
    }

    years = Math.floor(duration/year);
    duration -= years*year;

    days = Math.floor(duration/day);
    duration -= days*day;

    hours = Math.floor(duration/hour);
    duration -= hours*hour;
    
    minutes = Math.floor(duration/minute);
    duration -= minutes*minute;
    
    _seconds = duration;

    // Output

    let durationArray = [years, days, hours, minutes, _seconds];
    let durationNamesArray = ["year", "day", "hour", "minute", "second"];

    let HumanReadableArray = [];

    for (let i = 0; i < durationArray.length; i++) {
        if (durationArray[i] > 0) {
            let tempStr = "";
            tempStr += durationArray[i] + " " + durationNamesArray[i];
            if (durationArray[i] > 1) {
                tempStr += "s"
            }
            HumanReadableArray.push(tempStr);
        }
    }

    // Build the String

    let HumanReadable = "";

    for (let i = 0; i < HumanReadableArray.length; i++) {
        HumanReadable += HumanReadableArray[i];
        if (HumanReadableArray.length > 1) {
            if (i == HumanReadableArray.length-2) {
                HumanReadable += " and ";
            } else if (i < HumanReadableArray.length-1) {
                HumanReadable += ", ";
            } 
        }
    }

    return HumanReadable;
  }
  