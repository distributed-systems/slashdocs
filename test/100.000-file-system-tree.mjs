import section from '../es-modules/distributed-systems/section-tests/1.0.0+/index.mjs';
import assert from 'assert';
import path from 'path';
import FileSystemTree from '../src/FileSystemTree.mjs';


section('File System Tree', (section) => {
    section.test('Instantiate FileSystemTree class', async() => {
        new FileSystemTree('test');
    });

    section.test('Load files', async() => {
        const testDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'docs/source');
        const tree = new FileSystemTree(testDir);

        await tree.load();

        assert(tree.root);
        assert(tree.root.files.length >= 1);
        assert(tree.root.directories.length >= 1);
    });
});