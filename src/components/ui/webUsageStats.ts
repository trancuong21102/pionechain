export const mobileOS = [
  {
    label: "Android",
    value: 70.48,
  },
  {
    label: "iOS",
    value: 28.8,
  },
  {
    label: "Other",
    value: 0.71,
  },
];

export const platforms = [
  {
    label: "Mobile",
    value: 59.12,
  },
  {
    label: "Desktop",
    value: 40.88,
  },
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
