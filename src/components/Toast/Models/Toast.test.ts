import { Toast } from './Toast';

describe('Toast', () => {
  it('padding', async () => {
    const options = {
      padding: '45px 30px',
    };
    const toast = new Toast(options);
    expect(toast.padding).toEqual(options.padding);
  });
  it('background-color', async () => {
    const options = {
      backgroundColor: 'red',
    };
    const toast = new Toast(options);
    expect(toast.backgroundColor).toEqual(options.backgroundColor);
  });
  it('color', async () => {
    const options = {
      color: 'black',
    };
    const toast = new Toast(options);
    expect(toast.color).toEqual(options.color);
  });
  it('position', async () => {
    const options = {
      position: 'top-center',
    };
    const toast = new Toast(options);
    expect(toast.position).toEqual(options.position);
  });
  it('heigh', async () => {
    const options = {
      height: '40px',
    };
    const toast = new Toast(options);
    expect(toast.height).toEqual(options.height);
  });
  it('title', async () => {
    const options = {
      title: 'My custom title',
    };
    const toast = new Toast(options);
    expect(toast.title).toEqual(options.title);
  });
  it('subtitle', async () => {
    const options = {
      subtitle: 'My custom subtitle',
    };
    const toast = new Toast(options);
    expect(toast.subtitle).toEqual(options.subtitle);
  });
  it('type', async () => {
    const options = {
      type: 'success',
    };
    const toast = new Toast(options);
    expect(toast.type).toEqual(options.type);
  });
  it('width', async () => {
    const options = {
      width: '700px',
    };
    const toast = new Toast(options);
    expect(toast.width).toEqual(options.width);
  });
  it('with timer', async () => {
    const options = {
      onDismiss: (id: string): void => console.log(id),
    };
    const toast = new Toast(options);
    expect(toast.timer).toBeTruthy();
  });
  it('without timer', async () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.timer).toBeFalsy();
  });
  it('id', async () => {
    const options = {};
    const toast = new Toast(options);
    expect(toast.id).toBeTruthy();
  });
});
