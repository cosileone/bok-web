import { restoreEnvFiles, swapToProdEnv } from "./renameEnvFiles";

const main = (envString?: string) => {
  switch (envString) {
    case "dev":
      restoreEnvFiles();
      break;
    case "prod":
      swapToProdEnv();
      break;
    default:
      console.error("Invalid environment defined, use either 'dev' or 'prod'");
  }
};

main(process.argv[2]);
