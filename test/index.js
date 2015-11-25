import { expect } from 'chai';
import ExtendableError from '../src/index';

class TestError extends ExtendableError {}
class SubTestError extends TestError {}

describe('ExtendableError', () => {
  it('instance of', () => {
    const err1 = new Error();
    expect(err1).to.be.an.instanceof(Error);

    const err2 = new ExtendableError();
    expect(err2).to.be.an.instanceof(Error);
    expect(err2).to.be.an.instanceof(ExtendableError);

    const err3 = new TestError();
    expect(err3).to.be.an.instanceof(Error);
    expect(err3).to.be.an.instanceof(ExtendableError);
    expect(err3).to.be.an.instanceof(TestError);

    const err4 = new SubTestError();
    expect(err4).to.be.an.instanceof(Error);
    expect(err4).to.be.an.instanceof(ExtendableError);
    expect(err4).to.be.an.instanceof(TestError);
    expect(err4).to.be.an.instanceof(SubTestError);
  });

  it('.name', () => {
    const err1 = new ExtendableError();
    expect(err1.name).to.equal('ExtendableError');

    const err2 = new TestError();
    expect(err2.name).to.equal('TestError');

    const err3 = new SubTestError();
    expect(err3.name).to.equal('SubTestError');
  });

  it('name is not enumerable', () => {
    const err1 = new Error();
    expect(err1.propertyIsEnumerable('name')).to.be.false;

    const err2 = new ExtendableError();
    expect(err2.propertyIsEnumerable('name')).to.be.false;

    const err3 = new TestError();
    expect(err3.propertyIsEnumerable('name')).to.be.false;

    const err4 = new SubTestError();
    expect(err4.propertyIsEnumerable('name')).to.be.false;
  });

  it('.stack', () => {
    const err1 = new ExtendableError();
    expect(err1.stack).to.be.a('string');

    const err2 = new TestError();
    expect(err2.stack).to.be.a('string');
  });

  it('stack is not enumerable', () => {
    const err1 = new Error();
    expect(err1.propertyIsEnumerable('stack')).to.be.false;

    const err2 = new ExtendableError();
    expect(err2.propertyIsEnumerable('stack')).to.be.false;

    const err3 = new TestError();
    expect(err3.propertyIsEnumerable('stack')).to.be.false;

    const err4 = new SubTestError();
    expect(err4.propertyIsEnumerable('stack')).to.be.false;
  });

  it('#toString', () => {
    const err1 = new ExtendableError();
    expect(err1.toString()).to.equal('ExtendableError');

    const err2 = new ExtendableError("My Message");
    expect(err2.toString()).to.equal('ExtendableError: My Message');

    const err3 = new TestError();
    expect(err3.toString()).to.equal('TestError');

    const err4 = new TestError("My Message");
    expect(err4.toString()).to.equal('TestError: My Message');

    const err5 = new SubTestError();
    expect(err5.toString()).to.equal('SubTestError');

    const err6 = new SubTestError("My Message");
    expect(err6.toString()).to.equal('SubTestError: My Message');
  });

  it('.message', () => {
    const err = new ExtendableError('error occurred');
    expect(err.message).to.equal('error occurred');
  })

  it('message is not enumerable', () => {
    const err1 = new Error();
    expect(err1.propertyIsEnumerable('message')).to.be.false;

    const err2 = new ExtendableError();
    expect(err2.propertyIsEnumerable('message')).to.be.false;

    const err3 = new TestError();
    expect(err3.propertyIsEnumerable('message')).to.be.false;

    const err4 = new SubTestError();
    expect(err4.propertyIsEnumerable('message')).to.be.false;
  })
});
