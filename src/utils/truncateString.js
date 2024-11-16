export const handleTruncateString = (string, maxLength) => {
  if (!string) return "";
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};