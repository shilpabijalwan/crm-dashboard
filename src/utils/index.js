export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2) // only take first 2 initials
    .join("")
    .toUpperCase();
}
