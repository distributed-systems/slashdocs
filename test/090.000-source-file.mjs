import section from '../es-modules/distributed-systems/section-tests/1.0.0+/index.mjs';
import assert from 'assert';
import path from 'path';
import SourceFile from '../src/SourceFile.mjs';


section('Source File', (section) => {
    section.test('Instantiate SourceFile class', async() => {
        new SourceFile({
            path: '/100.700-file.md'
        });
    });


    section.test('File properties', async() => {
        const file = new SourceFile({
            path: 'src/test/100.700-file.md',
        });

        assert.equal(file.order, '100.700');
        assert.equal(file.name, 'file');
        assert.equal(file.extension, 'md');
    });


    section.test('Claim file', async() => {
        const file = new SourceFile({
            path: 'src/test/100.700-file.md',
        });

        assert.equal(file.isClaimed, false);

        file.claim({});

        assert.equal(file.isClaimed, true);
    });
});