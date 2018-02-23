import { getPathParts, getFilenames } from '../../src/helpers/pathHelper';
import { expect } from 'chai';

const ARTICLEROOT = '/articleroot';

const PATHPART_TESTCASES = [
  { input:'/foo/bar',     expected:[ 'foo' , 'bar' ],     file1:'/articleroot/foo/bar',     file2:'/articleroot/foo/bar.txt'  },
  { input:'/foo/bar/baz', expected:[ 'foo' , 'bar/baz' ], file1:'/articleroot/foo/bar/baz', file2:'/articleroot/foo/bar/baz.txt'  },
  { input:'foo/bar',      expected:[ 'foo' , 'bar' ],     file1:'/articleroot/foo/bar',     file2:'/articleroot/foo/bar.txt'  },
  { input:'/foo/',        expected:[ 'foo' , '_home' ],   file1:'/articleroot/foo/_home',   file2:'/articleroot/foo/_home.txt'  },
  { input:'/foo',         expected:[ 'foo' , '_home' ],   file1:'/articleroot/foo/_home',   file2:'/articleroot/foo/_home.txt'  },
]

describe('getFilenameFromPath.getPathParts', () => {
  for (let i = 0, tc; tc = PATHPART_TESTCASES[i]; i++) {
    it(`parses case #${i} correctly`, () => {
      expect(getPathParts(tc.input)).to.eql(tc.expected);
    });
  }
})

describe('getFilenameFromPath.default', () => {
  for (let i = 0, tc; tc = PATHPART_TESTCASES[i]; i++) {
    it(`parses case #${i} correctly`, () => {
      expect(getFilenames(tc.input, ARTICLEROOT)[0]).to.eql(tc.file1);
      expect(getFilenames(tc.input, ARTICLEROOT)[1]).to.eql(tc.file2);
    });
  }
});
