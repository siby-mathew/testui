export const formatTimeDiff = (
  unixTime: number,
  mode: "since" | "until" = "since",
): string => {
  const now = Date.now();
  const ts = unixTime < 1e12 ? unixTime * 1000 : unixTime;

  let diff = mode === "since" ? now - ts : ts - now;
  if (diff < 0) diff = 0;

  const sec = 1000;
  const min = 60 * sec;
  const hr = 60 * min;
  const day = 24 * hr;
  const mon = 30 * day;
  const yr = 365 * day;

  if (diff < 60 * sec) {
    if (mode === "since") return "just now";
    const s = Math.floor(diff / 1000);
    return s <= 0 ? "now" : `in ${s}s`;
  }
  let rem = diff;
  const years = Math.floor(rem / yr);
  rem %= yr;
  const months = Math.floor(rem / mon);
  rem %= mon;
  const days = Math.floor(rem / day);
  rem %= day;
  const hours = Math.floor(rem / hr);
  rem %= hr;
  const minutes = Math.floor(rem / min);

  const parts: string[] = [];
  if (years) parts.push(`${years} y`);
  if (months) parts.push(`${months} mo`);
  if (days) parts.push(`${days} d`);
  if (hours) parts.push(`${hours} h`);
  if (minutes || parts.length === 0) parts.push(`${minutes} min`);

  return mode === "since" ? `${parts.join(" ")} ago` : `in ${parts.join(" ")}`;
};
