import fs, { type PathLike } from "fs";

const envFilename = ".env";
const envFilenameTemporary = `${envFilename}.temp.local`;
const envProdFilename = ".env.prod.local";

const renameFile = (from: PathLike, to: PathLike, cb: () => void) => {
  try {
    fs.renameSync(from, to);
    cb();
  } catch (e) {
    console.log(e);
  }
};

const swapToProdEnv = () => {
  console.log("Renaming files...");

  renameFile(envFilename, envFilenameTemporary, () =>
    console.log(
      `Main "${envFilename}" file renamed to "${envFilenameTemporary}" successfully`,
    ),
  );
  renameFile(envProdFilename, envFilename, () =>
    console.log(
      `Prod "${envProdFilename}" file renamed "${envFilename}" successfully`,
    ),
  );
};

const restoreEnvFiles = () => {
  console.log("Restoring filenames");

  renameFile(envFilename, envProdFilename, () =>
    console.log(
      `Prod "${envFilename}" file restored to "${envProdFilename}" successfully`,
    ),
  );

  renameFile(envFilenameTemporary, envFilename, () =>
    console.log(
      `Main "${envFilenameTemporary}" file restored to "${envFilename}" successfully`,
    ),
  );
};

export { restoreEnvFiles, swapToProdEnv };
