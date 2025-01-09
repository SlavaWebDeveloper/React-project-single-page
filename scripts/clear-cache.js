const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', 'node_modules', '.cache');
console.log(' cacheDir: ', cacheDir);

const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            fs.lstatSync(curPath).isDirectory()
                ? deleteFolderRecursive(curPath)
                : fs.unlinkSync(curPath);
        });
        fs.rmdirSync(folderPath);
        console.log(`Удалена папка: ${folderPath}`);
    } else {
        console.log(`Папка ${folderPath} не найдена.`);
    }
};

deleteFolderRecursive(cacheDir);
