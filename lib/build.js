// !
// ! The build-feature is only available via npx.
// ! It is used to copy asset files.
// !
import * as fs from 'fs/promises';
import { join } from 'path';
const passedArguments = process.argv.slice(2).map((arg) => arg.replace('--', ''));
const config = {
    from: passedArguments[0],
    to: passedArguments[1],
    regex: new RegExp(passedArguments[2])
};
handleFolder(config.from);
async function handleFolder(folderUrl) {
    const entries = await fs.readdir(folderUrl);
    for (const entry of entries) {
        if (entry.includes('.'))
            handleFile(`${folderUrl}/${entry}`);
        else
            handleFolder(`${folderUrl}/${entry}`);
    }
}
async function handleFile(fileUrl) {
    if (!config.regex.test(fileUrl))
        return;
    const newPath = join(config.to, fileUrl.substring(0, fileUrl.length));
    fs.copyFile(fileUrl, newPath);
}
