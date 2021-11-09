import { clearCommands, store } from "../redux";

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

    case "open":
      if (store.getState().directory.value[args[1]]) {
        if (store.getState().directory.value[args[1]].type === "file") {
          // @ts-ignore
          window.open(store.getState().directory.value[args[1]].link);
          returnCode = "0"
        } else {
          console.log("it's a folder");
          returnCode = "-1";
        }
      } else {
        console.log("file not found");
        returnCode = "404";
      }

      break;
    default:
      break;
  }

  return returnCode;
}


export default parseCommand;
