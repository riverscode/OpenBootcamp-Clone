const Logo = ({ ...rest }) => {
  return (
    <svg {...rest} viewBox="0 0 31 35" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.7939" cy="11.7939" r="11.7939" fill="#0BF082"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3442 11.8215H11.6555V24.2194H11.6555V35H24.3442C27.7678 35 30.5432 32.2247 30.5432 28.8011C30.5432 26.4918 29.2804 24.4774 27.4076 23.4108C29.2804 22.3442 30.5431 20.3298 30.5431 18.0205C30.5431 14.5969 27.7678 11.8215 24.3442 11.8215Z"
        fill="#047AF3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5877 11.8215C23.5728 18.3224 18.2982 23.5878 11.7939 23.5878C11.7477 23.5878 11.7016 23.5875 11.6555 23.587V11.8215H23.5877Z"
        fill="#0DC0CB"
      ></path>
    </svg>
  );
};
export default Logo;
