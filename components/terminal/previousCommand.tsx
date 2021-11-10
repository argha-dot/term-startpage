import parseCommand from "../../functions/parseCommand";
import { errorCodes } from "../../data/errorCodes";

import React, { Fragment, useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface Props {
  command: string
}

const PreviousCommand = ({ command }: Props) => {
  const _directory = useSelector((state: RootState) => state.directory.value);
  const [commandAction, setCommandAction] = useState("");
  const directory = _directory;

  useEffect(() => {
    setCommandAction(parseCommand(command));
  }, [])

  return (
    <Fragment>
      <div className="flex gap-3 items-center">
        <p>~ $</p>
        <p>{command}</p>
      </div>

      {console.log("commandAction: ", commandAction)}
      {
        command === "ls" ?
          <div className="flex gap-4">
            {Object.keys(directory).map((key) => {
              return (
                <p className={`${directory[key].type ? "text-green-500" : "text-gray-100"}`} key={key}>{key}</p>
              )
            })}
          </div>
          :
          <></>
      }
      {
        commandAction !== "0" ? <p>{errorCodes[commandAction]}</p> : <></>
      }
    </Fragment>
  );
}

export default PreviousCommand;
