import React, { useState, useRef, Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TerminalInput from "./input";
import PreviousCommand from "./previousCommand";

const Terminal = () => {

  const terminalRef = useRef<HTMLDivElement>(null);

  const [width] = useState(700);
  const [height] = useState(450);

  const commands = useSelector((state: RootState) => state.command.value);

  return (
    <div
      className="text-gray-100 bg-term-gray px-6 rounded-md text-base"
      style={{ width: `${width}px`, height: `${height}px` }}
      ref={terminalRef}
    >
      <div className="h-10 pt-5 w-full flex gap-2 justify-end">
        <div className="rounded-full w-3 h-3 bg-[#FFBD2E]"></div>
        <div className="rounded-full w-3 h-3 bg-[#FF5F56]"></div>
      </div>

      {
        commands.map((command, index) => {
          return (
            <Fragment key={index}>
              <PreviousCommand command={command.command} />
            </Fragment>
          )
        })
      }
      <TerminalInput />
    </div>
  );
}



export default Terminal;
