import React, { useEffect, useRef } from "react";

interface Props {
  command: string
}

const PreviousCommand = ({command}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  }

  useEffect(() => {
    focusInput();
  }, [])

  return (
    <div className="flex gap-3 items-center">
      <p>~ $</p>
      <p>{command}</p>
    </div>
  );
}

export default PreviousCommand;
