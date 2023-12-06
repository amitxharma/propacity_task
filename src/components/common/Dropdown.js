import React, { useContext } from "react";
import "../style/dropdown.css";
import DetailsContex from "../../contex/DetailsContex";
const Dropdown = ({ sty, setIsOpen, isOpen }) => {
  // using global contex to know of the user open dropdown
  const { setModal, modal } = useContext(DetailsContex);

  return (
    <ul className={`dropdown-list ${!sty && "li-pos"}`}>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.4569 7.7975C15.435 7.74813 14.9056 6.57375 13.7287 5.39687C12.1606 3.82875 10.18 3 7.99999 3C5.81999 3 3.83937 3.82875 2.27124 5.39687C1.09437 6.57375 0.562494 7.75 0.543119 7.7975C0.51469 7.86144 0.5 7.93064 0.5 8.00062C0.5 8.0706 0.51469 8.1398 0.543119 8.20375C0.564994 8.25312 1.09437 9.42688 2.27124 10.6038C3.83937 12.1713 5.81999 13 7.99999 13C10.18 13 12.1606 12.1713 13.7287 10.6038C14.9056 9.42688 15.435 8.25312 15.4569 8.20375C15.4853 8.1398 15.5 8.0706 15.5 8.00062C15.5 7.93064 15.4853 7.86144 15.4569 7.7975ZM7.99999 12C6.07624 12 4.39562 11.3006 3.00437 9.92188C2.43352 9.35418 1.94786 8.70685 1.56249 8C1.94776 7.29309 2.43343 6.64574 3.00437 6.07812C4.39562 4.69938 6.07624 4 7.99999 4C9.92374 4 11.6044 4.69938 12.9956 6.07812C13.5676 6.6456 14.0543 7.29295 14.4406 8C13.99 8.84125 12.0269 12 7.99999 12ZM7.99999 5C7.40665 5 6.82663 5.17595 6.33328 5.50559C5.83994 5.83524 5.45542 6.30377 5.22836 6.85195C5.00129 7.40013 4.94188 8.00333 5.05764 8.58527C5.17339 9.16721 5.45912 9.70176 5.87867 10.1213C6.29823 10.5409 6.83278 10.8266 7.41472 10.9424C7.99667 11.0581 8.59987 10.9987 9.14804 10.7716C9.69622 10.5446 10.1648 10.1601 10.4944 9.66671C10.824 9.17336 11 8.59334 11 8C10.9992 7.2046 10.6828 6.44202 10.1204 5.87959C9.55797 5.31716 8.79539 5.00083 7.99999 5ZM7.99999 10C7.60443 10 7.21775 9.8827 6.88885 9.66294C6.55996 9.44318 6.30361 9.13082 6.15224 8.76537C6.00086 8.39991 5.96125 7.99778 6.03842 7.60982C6.11559 7.22186 6.30608 6.86549 6.58578 6.58579C6.86549 6.30608 7.22185 6.1156 7.60981 6.03843C7.99778 5.96126 8.39991 6.00087 8.76536 6.15224C9.13081 6.30362 9.44317 6.55996 9.66293 6.88886C9.8827 7.21776 9.99999 7.60444 9.99999 8C9.99999 8.53043 9.78928 9.03914 9.41421 9.41421C9.03913 9.78929 8.53043 10 7.99999 10Z"
            fill="black"
          />
        </svg>
        View
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14 9.5V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V9.5C2 9.36739 2.05268 9.24021 2.14645 9.14645C2.24021 9.05268 2.36739 9 2.5 9C2.63261 9 2.75979 9.05268 2.85355 9.14645C2.94732 9.24021 3 9.36739 3 9.5V13H13V9.5C13 9.36739 13.0527 9.24021 13.1464 9.14645C13.2402 9.05268 13.3674 9 13.5 9C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5ZM7.64625 9.85375C7.69269 9.90024 7.74783 9.93712 7.80853 9.96228C7.86923 9.98744 7.93429 10.0004 8 10.0004C8.06571 10.0004 8.13077 9.98744 8.19147 9.96228C8.25217 9.93712 8.30731 9.90024 8.35375 9.85375L10.8538 7.35375C10.9002 7.3073 10.9371 7.25214 10.9622 7.19145C10.9873 7.13075 11.0003 7.0657 11.0003 7C11.0003 6.9343 10.9873 6.86925 10.9622 6.80855C10.9371 6.74786 10.9002 6.6927 10.8538 6.64625C10.8073 6.59979 10.7521 6.56294 10.6914 6.5378C10.6308 6.51266 10.5657 6.49972 10.5 6.49972C10.4343 6.49972 10.3692 6.51266 10.3086 6.5378C10.2479 6.56294 10.1927 6.59979 10.1462 6.64625L8.5 8.29313V2.5C8.5 2.36739 8.44732 2.24021 8.35355 2.14645C8.25979 2.05268 8.13261 2 8 2C7.86739 2 7.74021 2.05268 7.64645 2.14645C7.55268 2.24021 7.5 2.36739 7.5 2.5V8.29313L5.85375 6.64625C5.75993 6.55243 5.63268 6.49972 5.5 6.49972C5.36732 6.49972 5.24007 6.55243 5.14625 6.64625C5.05243 6.74007 4.99972 6.86732 4.99972 7C4.99972 7.13268 5.05243 7.25993 5.14625 7.35375L7.64625 9.85375Z"
            fill="#252C32"
          />
        </svg>
        Download
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14.2069 4.58561L11.4144 1.79249C11.3215 1.6996 11.2113 1.62592 11.0899 1.57565C10.9686 1.52539 10.8385 1.49951 10.7072 1.49951C10.5759 1.49951 10.4458 1.52539 10.3245 1.57565C10.2031 1.62592 10.0929 1.6996 10 1.79249L2.29313 9.49999C2.19987 9.59251 2.12593 9.70265 2.0756 9.824C2.02528 9.94535 1.99959 10.0755 2.00001 10.2069V13C2.00001 13.2652 2.10536 13.5196 2.2929 13.7071C2.48043 13.8946 2.73479 14 3.00001 14H5.79313C5.9245 14.0004 6.05464 13.9747 6.17599 13.9244C6.29735 13.8741 6.40748 13.8001 6.50001 13.7069L14.2069 5.99999C14.2998 5.90712 14.3734 5.79687 14.4237 5.67553C14.474 5.55419 14.4999 5.42414 14.4999 5.2928C14.4999 5.16146 14.474 5.0314 14.4237 4.91006C14.3734 4.78872 14.2998 4.67847 14.2069 4.58561ZM5.79313 13H3.00001V10.2069L8.50001 4.70686L11.2931 7.49999L5.79313 13ZM12 6.79249L9.20688 3.99999L10.7069 2.49999L13.5 5.29249L12 6.79249Z"
            fill="#252C32"
          />
        </svg>
        Rename
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.9999 9.99999C10.6664 9.99988 10.3362 10.0667 10.0289 10.1965C9.72169 10.3263 9.44361 10.5164 9.21116 10.7556L6.32991 8.90374C6.55655 8.32255 6.55655 7.67742 6.32991 7.09624L9.21116 5.24436C9.64394 5.68769 10.2259 5.95452 10.8443 5.99313C11.4626 6.03174 12.0733 5.83937 12.5578 5.45333C13.0424 5.06729 13.3664 4.51506 13.4669 3.90373C13.5675 3.2924 13.4374 2.66551 13.102 2.14459C12.7666 1.62368 12.2498 1.24587 11.6516 1.08439C11.0535 0.92292 10.4167 0.989294 9.86474 1.27065C9.31276 1.552 8.88492 2.02829 8.66416 2.60717C8.4434 3.18605 8.44544 3.82628 8.66991 4.40374L5.78866 6.25561C5.4417 5.89941 4.9964 5.65477 4.50968 5.55295C4.02296 5.45114 3.51694 5.49678 3.0563 5.68405C2.59565 5.87132 2.20132 6.1917 1.9237 6.60424C1.64609 7.01678 1.4978 7.50274 1.4978 7.99999C1.4978 8.49724 1.64609 8.9832 1.9237 9.39574C2.20132 9.80828 2.59565 10.1287 3.0563 10.3159C3.51694 10.5032 4.02296 10.5488 4.50968 10.447C4.9964 10.3452 5.4417 10.1006 5.78866 9.74436L8.66991 11.5962C8.47689 12.0941 8.44833 12.6406 8.5884 13.1559C8.72848 13.6711 9.02984 14.1279 9.44835 14.4595C9.86685 14.7911 10.3805 14.98 10.9141 14.9985C11.4478 15.017 11.9733 14.8642 12.4138 14.5624C12.8543 14.2606 13.1866 13.8258 13.362 13.3215C13.5375 12.8172 13.5469 12.27 13.3888 11.76C13.2308 11.25 12.9136 10.8039 12.4837 10.4872C12.0538 10.1705 11.5338 9.99979 10.9999 9.99999ZM10.9999 1.99999C11.2966 1.99999 11.5866 2.08796 11.8333 2.25278C12.0799 2.41761 12.2722 2.65187 12.3857 2.92596C12.4993 3.20005 12.529 3.50165 12.4711 3.79262C12.4132 4.08359 12.2703 4.35087 12.0606 4.56065C11.8508 4.77043 11.5835 4.91329 11.2925 4.97117C11.0016 5.02904 10.7 4.99934 10.4259 4.88581C10.1518 4.77228 9.91752 4.58002 9.7527 4.33334C9.58788 4.08667 9.49991 3.79666 9.49991 3.49999C9.49991 3.10216 9.65794 2.72063 9.93925 2.43933C10.2206 2.15802 10.6021 1.99999 10.9999 1.99999ZM3.99991 9.49999C3.70323 9.49999 3.41322 9.41201 3.16655 9.24719C2.91988 9.08237 2.72762 8.8481 2.61409 8.57401C2.50056 8.29992 2.47085 7.99832 2.52873 7.70735C2.58661 7.41638 2.72947 7.14911 2.93925 6.93933C3.14902 6.72955 3.4163 6.58669 3.70727 6.52881C3.99824 6.47093 4.29984 6.50064 4.57393 6.61417C4.84802 6.7277 5.08229 6.91996 5.24711 7.16663C5.41193 7.41331 5.49991 7.70332 5.49991 7.99999C5.49991 8.39781 5.34187 8.77934 5.06057 9.06065C4.77926 9.34195 4.39773 9.49999 3.99991 9.49999ZM10.9999 14C10.7032 14 10.4132 13.912 10.1666 13.7472C9.91988 13.5824 9.72762 13.3481 9.61409 13.074C9.50056 12.7999 9.47085 12.4983 9.52873 12.2074C9.58661 11.9164 9.72947 11.6491 9.93925 11.4393C10.149 11.2295 10.4163 11.0867 10.7073 11.0288C10.9982 10.9709 11.2998 11.0006 11.5739 11.1142C11.848 11.2277 12.0823 11.42 12.2471 11.6666C12.4119 11.9133 12.4999 12.2033 12.4999 12.5C12.4999 12.8978 12.3419 13.2793 12.0606 13.5606C11.7793 13.842 11.3977 14 10.9999 14Z"
            fill="#252C32"
          />
        </svg>
        Share Link
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14 4H9.66687L7.93313 2.7C7.75978 2.57066 7.54941 2.50054 7.33313 2.5H4.5C4.23478 2.5 3.98043 2.60536 3.79289 2.79289C3.60536 2.98043 3.5 3.23478 3.5 3.5V4.5H2.5C2.23478 4.5 1.98043 4.60536 1.79289 4.79289C1.60536 4.98043 1.5 5.23478 1.5 5.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H12.0556C12.306 13.4997 12.546 13.4001 12.723 13.223C12.9001 13.046 12.9997 12.806 13 12.5556V11.5H14.0556C14.306 11.4997 14.546 11.4001 14.723 11.223C14.9001 11.046 14.9997 10.806 15 10.5556V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4ZM12 12.5H2.5V5.5H5.33313L7.06687 6.8C7.24022 6.92934 7.45059 6.99946 7.66687 7H12V12.5ZM14 10.5H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6H7.66687L5.93313 4.7C5.75978 4.57066 5.54941 4.50054 5.33313 4.5H4.5V3.5H7.33313L9.06688 4.8C9.24022 4.92934 9.45059 4.99946 9.66687 5H14V10.5Z"
            fill="#252C32"
          />
        </svg>
        Move
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM6 3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5H6V3.5ZM13 13H3V6H13V13Z"
            fill="black"
          />
        </svg>
        Mark Private
      </li>
      <li
        className="delete"
        onClick={() => {
          setModal(!modal);
          //  to close the dropdown
          setIsOpen(!isOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.5 3H11V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H6.5C6.10218 1 5.72064 1.15804 5.43934 1.43934C5.15804 1.72064 5 2.10218 5 2.5V3H2.5C2.36739 3 2.24021 3.05268 2.14645 3.14645C2.05268 3.24021 2 3.36739 2 3.5C2 3.63261 2.05268 3.75979 2.14645 3.85355C2.24021 3.94732 2.36739 4 2.5 4H3V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V4H13.5C13.6326 4 13.7598 3.94732 13.8536 3.85355C13.9473 3.75979 14 3.63261 14 3.5C14 3.36739 13.9473 3.24021 13.8536 3.14645C13.7598 3.05268 13.6326 3 13.5 3ZM6 2.5C6 2.36739 6.05268 2.24021 6.14645 2.14645C6.24021 2.05268 6.36739 2 6.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3H6V2.5ZM12 13H4V4H12V13ZM7 6.5V10.5C7 10.6326 6.94732 10.7598 6.85355 10.8536C6.75979 10.9473 6.63261 11 6.5 11C6.36739 11 6.24021 10.9473 6.14645 10.8536C6.05268 10.7598 6 10.6326 6 10.5V6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24021 6.05268 6.36739 6 6.5 6C6.63261 6 6.75979 6.05268 6.85355 6.14645C6.94732 6.24021 7 6.36739 7 6.5ZM10 6.5V10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11C9.36739 11 9.24021 10.9473 9.14645 10.8536C9.05268 10.7598 9 10.6326 9 10.5V6.5C9 6.36739 9.05268 6.24021 9.14645 6.14645C9.24021 6.05268 9.36739 6 9.5 6C9.63261 6 9.75979 6.05268 9.85355 6.14645C9.94732 6.24021 10 6.36739 10 6.5Z"
            fill="#F15454"
          />
        </svg>
        <span>Delete</span>
      </li>
    </ul>
  );
};

export default Dropdown;