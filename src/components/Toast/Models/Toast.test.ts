import { Toast } from './Toast';

describe('Toast', () => {
  it('padding', () => {
    const options = {
      padding: '45px 30px',
    };
    const toast = new Toast(options);
    expect(toast.padding).toEqual(options.padding);
  });
  it('background-color', () => {
    const options = {
      backgroundColor: 'red',
    };
    const toast = new Toast(options);
    expect(toast.backgroundColor).toEqual(options.backgroundColor);
  });
  it('color', () => {
    const options = {
      color: 'black',
    };
    const toast = new Toast(options);
    expect(toast.color).toEqual(options.color);
  });
  it('position', () => {
    const options = {
      position: 'top-center',
    };
    const toast = new Toast(options);
    expect(toast.position).toEqual(options.position);
  });
  it('heigh', () => {
    const options = {
      height: '40px',
    };
    const toast = new Toast(options);
    expect(toast.height).toEqual(options.height);
  });
  it('title', () => {
    const options = {
      title: 'My custom title',
    };
    const toast = new Toast(options);
    expect(toast.title).toEqual(options.title);
  });
  it('subtitle', () => {
    const options = {
      subtitle: 'My custom subtitle',
    };
    const toast = new Toast(options);
    expect(toast.subtitle).toEqual(options.subtitle);
  });
  it('type', () => {
    const options = {
      type: 'success',
    };
    const toast = new Toast(options);
    expect(toast.type).toEqual(options.type);
  });
  it('width', () => {
    const options = {
      width: '700px',
    };
    const toast = new Toast(options);
    expect(toast.width).toEqual(options.width);
  });
  it('with timer', () => {
    const options = {
      onDismiss: jest.fn(),
    };
    const toast = new Toast(options);
    expect(toast.timer).toBeTruthy();
  });
  it('without timer', () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.timer).toBeFalsy();
  });
  it('id', () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.id).toBeTruthy();
  });
  it('with actions', () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.actions).toBeTruthy();
  });
  it('without actions', () => {
    const options = {
      isClosable: false,
    };
    const toast = new Toast(options);
    expect(toast.actions).toBeFalsy();
  });
  it('with content', () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.content).toBeTruthy();
  });
});
