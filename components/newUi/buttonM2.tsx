import Link from "next/link";
import ButtonM0 from "./buttonM0";

export default function ButtonM2({
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
    "px-[48px] py-[6px] text-[32px] rounded-[16px] border-[2.5px] bg-white text-blue-200 border-blue-200 w-auto inline-block";
  const defaultStyle =
    "px-[48px] py-[6px] text-[32px] rounded-[16px] border-[2.5px] bg-white border-blue-500 hover:border-blue-600 active:border-blue-700 text-blue-500 hover:text-blue-600 active:text-blue-700 w-auto inline-block";
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
