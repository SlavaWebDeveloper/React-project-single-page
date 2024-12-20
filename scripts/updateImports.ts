import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entitie', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarationlarations = sourceFile.getImportDeclarations();
    importDeclarationlarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();