import { Subject } from './Subject';

describe('Subject', () => {
  it('attach', () => {
    const subject = new Subject();
    subject.attach(() => 'My observer');
    expect(subject.observers.length).toEqual(1);
  });
  it('publish', () => {
    const data = { test: 'test' };
    const subject = new Subject();
    subject.attach((_data) => {
      expect(_data).toEqual(data);
    });
    subject.publish(data);
  });
  it('detach', () => {
    const myObserver = (data): void => {
      console.log(data);
    };
    const subject = new Subject();
    subject.attach(myObserver);
    expect(subject.observers.length).toEqual(1);
    subject.detach(myObserver);
    expect(subject.observers.length).toEqual(0);
  });
});
