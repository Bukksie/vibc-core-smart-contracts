#!/usr/bin/env node
import {
  parseVerifyArgsFromCLI,
  readFromDeploymentFile,
  readMetadata,
} from "../utils/io";
import { $ } from "zx";
import { DEFAULT_VERIFIER, MODULE_ROOT_PATH } from "../utils/constants";

/**
 * Take a deployment name, and verify the result to blockscout api
 */
async function main() {
  const { deploymentName, verifierUrl, chainFolder, rpcUrl } =
    await parseVerifyArgsFromCLI();

  // Read deployment file, so that we can find path to artifact
  const deployment = await readFromDeploymentFile(deploymentName, chainFolder);
  const metadata = await readMetadata(deployment.factory);
  const compilationTarget = JSON.parse(metadata).settings.compilationTarget;
  const contractFile = Object.keys(compilationTarget)[0];
  const contractPath = `${contractFile}:${compilationTarget[contractFile]}`;

  // Find libraries into string that foundry expects if there are any
  let libStr: any = [];
  if (deployment.libraries) {
    if (deployment.libraries.length > 0) {
      const libraries = deployment.libraries[0];
      libStr = Object.keys(libraries).map((key) => `${key}${libraries[key]}`);
    } else {
      console.log("no length");
    }
  }

  console.log(
    `verifying ${deploymentName}'s deployment with ${deployment.factory} and libraries ${libStr}`
  );

  // Run foundry verification command
  const command = await $`cd ${MODULE_ROOT_PATH} && forge verify-contract ${
    deployment.address
  } ${contractPath} --verifier=${DEFAULT_VERIFIER} --verifier-url=${verifierUrl} --rpc-url=${rpcUrl} ${
    libStr.length > 0 ? `--libraries=${libStr}` : ""
  }`;

  console.log("verification result ", command);
}

main();
