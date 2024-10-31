import Link from "next/link";
import ButtonM0 from "./buttonM0";

export default function ButtonM1({
  text,
  url,
  isDisabled = false,
  hasOnClick = false,
  onClick,
}: Readonly<{
  text: string;
  url: string;
  isDisabled?: boolean;
  hasOnClick?: boolean;
  onClick?: () => void;
}>) {
  const disabledStyle =
    "px-[48px] py-[6px] text-[32px] rounded-[16px] bg-blue-100 text-blue-400 w-auto inline-block";
  const defaultStyle =
    "px-[48px] py-[6px] text-[32px] rounded-[16px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-blue-50 w-auto inline-block";
  return (
    <ButtonM0
      styleDisabled={disabledStyle}
      styleDefault={defaultStyle}
      text={text}
      url={url}
      isDisabled={isDisabled}
      hasOnClick={hasOnClick}
      onClick={onClick}
    />
  );
}
