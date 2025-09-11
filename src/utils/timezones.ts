// Common timezones with their UTC offsets
export interface Timezone {
  value: string;
  label: string;
  offset: string;
}

export const timezones: Timezone[] = [
  {
    value: "GMT-12:00",
    label: "International Date Line West",
    offset: "UTC -12:00",
  },
  { value: "GMT-11:00", label: "Midway Island, Samoa", offset: "UTC -11:00" },
  { value: "GMT-10:00", label: "Hawaii", offset: "UTC -10:00" },
  { value: "GMT-09:00", label: "Alaska", offset: "UTC -09:00" },
  {
    value: "GMT-08:00",
    label: "Pacific Time (US & Canada)",
    offset: "UTC -08:00",
  },
  {
    value: "GMT-07:00",
    label: "Mountain Time (US & Canada)",
    offset: "UTC -07:00",
  },
  {
    value: "GMT-06:00",
    label: "Central Time (US & Canada)",
    offset: "UTC -06:00",
  },
  {
    value: "GMT-05:00",
    label: "Eastern Time (US & Canada)",
    offset: "UTC -05:00",
  },
  { value: "GMT-04:00", label: "Atlantic Time (Canada)", offset: "UTC -04:00" },
  { value: "GMT-03:30", label: "Newfoundland", offset: "UTC -03:30" },
  { value: "GMT-03:00", label: "Brazil, Buenos Aires", offset: "UTC -03:00" },
  { value: "GMT-02:00", label: "Mid-Atlantic", offset: "UTC -02:00" },
  {
    value: "GMT-01:00",
    label: "Azores, Cape Verde Islands",
    offset: "UTC -01:00",
  },
  {
    value: "GMT+00:00",
    label: "Western Europe, London, Lisbon, Casablanca",
    offset: "UTC +00:00",
  },
  {
    value: "GMT+01:00",
    label: "Brussels, Copenhagen, Madrid, Paris",
    offset: "UTC +01:00",
  },
  {
    value: "GMT+02:00",
    label: "Kaliningrad, South Africa, Cairo",
    offset: "UTC +02:00",
  },
  {
    value: "GMT+03:00",
    label: "Baghdad, Riyadh, Moscow, St. Petersburg",
    offset: "UTC +03:00",
  },
  { value: "GMT+03:30", label: "Tehran", offset: "UTC +03:30" },
  {
    value: "GMT+04:00",
    label: "Abu Dhabi, Muscat, Baku, Tbilisi",
    offset: "UTC +04:00",
  },
  { value: "GMT+04:30", label: "Kabul", offset: "UTC +04:30" },
  {
    value: "GMT+05:00",
    label: "Ekaterinburg, Islamabad, Karachi",
    offset: "UTC +05:00",
  },
  {
    value: "GMT+05:30",
    label: "Mumbai, Kolkata, New Delhi",
    offset: "UTC +05:30",
  },
  { value: "GMT+05:45", label: "Kathmandu", offset: "UTC +05:45" },
  { value: "GMT+06:00", label: "Almaty, Dhaka", offset: "UTC +06:00" },
  { value: "GMT+06:30", label: "Yangon", offset: "UTC +06:30" },
  {
    value: "GMT+07:00",
    label: "Bangkok, Hanoi, Jakarta",
    offset: "UTC +07:00",
  },
  {
    value: "GMT+08:00",
    label: "Beijing, Perth, Singapore, Hong Kong",
    offset: "UTC +08:00",
  },
  {
    value: "GMT+09:00",
    label: "Tokyo, Seoul, Osaka, Sapporo",
    offset: "UTC +09:00",
  },
  { value: "GMT+09:30", label: "Adelaide, Darwin", offset: "UTC +09:30" },
  {
    value: "GMT+10:00",
    label: "Eastern Australia, Guam, Vladivostok",
    offset: "UTC +10:00",
  },
  {
    value: "GMT+11:00",
    label: "Magadan, Solomon Islands, New Caledonia",
    offset: "UTC +11:00",
  },
  {
    value: "GMT+12:00",
    label: "Auckland, Wellington, Fiji",
    offset: "UTC +12:00",
  },
  { value: "GMT+13:00", label: "Nuku'alofa", offset: "UTC +13:00" },
];

// Helper function to get current time in a specific timezone
export const getCurrentTimeInTimezone = (timezoneValue: string): string => {
  const now = new Date();

  // Extract offset from timezone value (e.g., GMT+02:00)
  const offsetMatch = timezoneValue.match(/GMT([+-])(\d{2}):(\d{2})/);

  if (!offsetMatch) {
    // Format time as HH:MM without seconds even for fallback case
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: undefined,
      hour12: false,
    });
  }

  const offsetSign = offsetMatch[1] === "+" ? 1 : -1;
  const offsetHours = parseInt(offsetMatch[2], 10);
  const offsetMinutes = parseInt(offsetMatch[3], 10);

  // Calculate total offset in minutes
  const offsetTotalMinutes = offsetSign * (offsetHours * 60 + offsetMinutes);

  // Get UTC time in minutes
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;

  // Add the timezone offset
  const targetTime = new Date(utcTime + offsetTotalMinutes * 60000);

  // Format time as HH:MM without seconds
  return targetTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: false,
  });
};

// Function to get timezone offset in format "UTC +02:00" or just "UTC" for UTC+0
export const getTimezoneOffset = (timezoneValue: string): string => {
  const timezone = timezones.find((tz) => tz.value === timezoneValue);

  if (!timezone) return "UTC";

  // Special case for UTC+00:00 - just return "UTC"
  if (timezone.value === "GMT+00:00") {
    return "UTC";
  }

  return timezone.offset;
};
