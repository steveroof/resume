export const createId = (strings: string[]) => {
  const id = strings.map((s) => s.toLowerCase().replaceAll(" ", "_")).join("_");
  return id;
};

export const getDurationYears = (
  startDateString: string,
  endDateString?: string
) => {
  const isoDetails = "-01T00:00:00.000-05:00"; //add east coast timezone to show the correct months and not be one month early
  console.log(`${startDateString}${isoDetails}`);
  const startDate = new Date(`${startDateString}${isoDetails}`);
  const endDate = endDateString
    ? new Date(`${endDateString}${isoDetails}`)
    : new Date();

  const durationMS = endDate.getTime() - startDate.getTime();
  const durationYears = durationMS / 1000 / 60 / 60 / 24 / 365;

  const startPresentation = startDate.toLocaleString("en-us", {
    year: "numeric",
    month: "long",
  });
  const endPresentation = endDateString
    ? endDate.toLocaleString("en-us", {
        year: "numeric",
        month: "long",
      })
    : "Present";

  const startAndEnd = `${startPresentation} - ${endPresentation}`;
  const duration = `${durationYears.toFixed(1)} year${
    durationYears > 1 ? "s" : ""
  }`;

  return { startAndEnd, duration };
};
