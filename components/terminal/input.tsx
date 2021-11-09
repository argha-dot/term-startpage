import React, { FormEvent, useEffect, useRef, useState } from "react";
import parseCommand from "../../functions/parseCommand";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCommand } from "../../redux";


const TerminalInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const commands = useSelector((state: RootState) => state.command.value);
  const [newCommand, setNewCommand] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCommand([...commands, { command: newCommand }]));

    parseCommand(newCommand);
    setNewCommand("")
  }

  return (
    <div className="flex gap-3 items-center">
      <p>~ $</p>

      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          value={newCommand}
          onChange={(e: any) => { setNewCommand(e.target.value) }}
          className="bg-transparent border-none focus:outline-none">
        </input>

        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}

export default TerminalInput;
