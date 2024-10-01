import { restoreEnvFiles, swapToProdEnv } from "./renameEnvFiles";
import { execSync } from "child_process";

const main = (args: string[]) => {
  const command = args[0];

  if (!command) {
    console.log("Please provide a command to run");
    return;
  }

  swapToProdEnv();

  try {
    console.log(`Executing "${command}"`);
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.log(e);
  }

  restoreEnvFiles();
};

const runCommand = () => main(process.argv.slice(2));
runCommand();
export default main;
