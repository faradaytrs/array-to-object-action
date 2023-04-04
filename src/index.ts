import { getInput, setOutput } from "@actions/core";

const data = JSON.parse(getInput("data", { required: true }));
if (!Array.isArray(data)) {
    throw new Error("Data must be an array");
}
const keyProperty = getInput("keyProperty", { required: true });
const valueProperty = getInput("valueProperty", { required: true });
const output = getInput("output", { required: false });

const resultObject = data.reduce((acc, item) => {
    acc[item[keyProperty]] = item[valueProperty];
    return acc;
}, {});

setOutput(output, JSON.stringify(resultObject));
