import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export function Github({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Instagram({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Facebook({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Pinterest({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.91 6.48 9.29-.1-.8-.19-2.02.04-2.9l1.24-5.25s-.31-.62-.31-1.54c0-1.44.83-2.52 1.88-2.52.88 0 1.31.67 1.31 1.47 0 .89-.57 2.22-.86 3.45-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.7 2.22-4.7 4.52 0 .89.34 1.85.77 2.37.09.1.1.18.07.28l-.29 1.18c-.05.18-.16.22-.36.13-1.33-.62-2.16-2.56-2.16-4.12 0-3.36 2.44-6.44 7.03-6.44 3.69 0 6.56 2.63 6.56 6.15 0 3.67-2.31 6.62-5.52 6.62-1.08 0-2.09-.56-2.44-1.22l-.66 2.53c-.24.92-.89 2.08-1.32 2.78 1.01.29 2.08.45 3.18.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export function Whatsapp({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.246 1.875 13.765 1.05 11.13 1.05 5.702 1.05 1.278 5.474 1.274 10.9c-.001 1.639.429 3.237 1.248 4.673l-.974 3.56 3.65-.957a9.78 9.78 0 0 0 4.863 1.278zm10.021-4.566c-.227-.113-1.343-.662-1.55-.737-.207-.075-.359-.112-.51.113-.151.225-.584.737-.716.887-.132.15-.264.168-.491.055-.227-.113-.956-.352-1.824-1.127-.675-.602-1.13-1.346-1.262-1.571-.132-.227-.014-.35.099-.462.101-.102.227-.264.34-.396.113-.132.15-.227.227-.377.075-.15.038-.282-.019-.396-.057-.113-.51-1.229-.699-1.687-.184-.443-.368-.383-.51-.39-.131-.006-.282-.007-.433-.007-.151 0-.396.057-.604.283-.208.227-.792.775-.792 1.89s.819 2.188.932 2.339c.113.15 1.612 2.462 3.905 3.45.546.235.973.376 1.306.481.549.174 1.049.15 1.444.09.44-.067 1.343-.549 1.531-1.079.188-.528.188-.981.132-1.076-.057-.095-.207-.15-.434-.263z" />
    </svg>
  );
}
