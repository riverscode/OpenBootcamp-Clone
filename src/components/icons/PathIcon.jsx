const PathIcon = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      focusable="false"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m21.781 13.875-2-2.5A1 1 0 0 0 19 11h-6V9h6c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5a1 1 0 0 0-.781.375l-2 2.5a1.001 1.001 0 0 0 0 1.25l2 2.5A1 1 0 0 0 5 9h6v2H5c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6v4h2v-4h6a1 1 0 0 0 .781-.375l2-2.5a1.001 1.001 0 0 0 0-1.25zM4.281 5.5 5.48 4H19l.002 3H5.48L4.281 5.5zM18.52 16H5v-3h13.52l1.2 1.5-1.2 1.5z"></path>
    </svg>
  );
};
export default PathIcon;
