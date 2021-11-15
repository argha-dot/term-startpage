import { clearCommands, setDirectory, store } from "../redux";

const parseCommand = (command: string) => {

  const args = command.split(" ");
  const op = command.split(" ")[0];

  let returnCode = "0";

  switch (op) {
    case "cls":
      store.dispatch(clearCommands());
      returnCode = "0";
      break;

    case "clear":
      store.dispatch(clearCommands());
      returnCode = "0";
      break;

    case "ls":
      returnCode = "0";
      break;

    case "open":
      if (store.getState().directory.value[args[1]]) {
        if (store.getState().directory.value[args[1]].type === "file") {
          // @ts-ignore
          window.open(store.getState().directory.value[args[1]].link);
          returnCode = "0"
        } else {
          console.log("it's a folder");
          returnCode = "403";
        }
      } else {
        if (args[1]) {
          console.log("file not found");
          returnCode = "405";
        } else {
          returnCode = "406";
        }
      }

      break;

    case "rm":
      if (args[1]) {
        if (store.getState().directory.value[args[1]].type === "file") {
          const _dir = store.getState().directory.value;
          const {[args[1]]: remove, ...rest} = _dir;
          console.log(remove, rest);
          store.dispatch( setDirectory({ ...rest }) ) 
        } else {
          returnCode = "503";
        }
      } else {
        returnCode = "506";
      }
      break;

    default:
      console.log("invalid command");
      returnCode = "404"
      break;
  }

  return returnCode;
}


export default parseCommand;
