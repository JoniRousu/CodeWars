function formatDuration (seconds) {
    if (seconds === 0) {
        return "now";
    }

    let dur = seconds;
    
    let minute = 60;
    let hour = 60 * minute;
    let day = 24 * hour;
    let year = 365 * day;
    let durations = [year, day, hour, minute];

    let duration = [0,0,0,0];

    for (let i = 0; i < duration.length; i++) {
        duration[i] = Math.floor(dur/durations[i]);
        dur -= duration[i]*durations[i];
    }

    duration.push(dur); // Remaining seconds

    // Output

    let durationNames = ["year", "day", "hour", "minute", "second"];

    let HumanReadable = [];

    for (let i = 0; i < duration.length; i++) {
        if (duration[i] > 0) {
            HumanReadable.push(duration[i] + " " + durationNames[i]);
            if (duration[i] > 1) {
                HumanReadable.push(HumanReadable.pop() + "s");
            }
        }
    }

    // Build the String

    let HumanReadableOutput = "";

    while (HumanReadable.length > 0) {
        HumanReadableOutput += HumanReadable.shift();
        switch (HumanReadable.length) {
            case 0: break;
            case 1: HumanReadableOutput += " and "; break;
            default:HumanReadableOutput += ", "; break;
        }
    }

    return HumanReadableOutput;
  }
  