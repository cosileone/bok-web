export default function UserIcon({ ...rest }) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0-4-4H9a4 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
