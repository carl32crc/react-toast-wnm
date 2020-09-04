# [react-toast-wnm](https://carl32crc.github.io/react-toast-wnm/?path=/story/button--sample) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/carl32crc/react-toast-wnm/blob/master/LICENSE) [![codecov](https://codecov.io/gh/carl32crc/react-toast-wnm/branch/master/graph/badge.svg?token=N6PYSXWNYL)](https://codecov.io/gh/carl32crc/react-toast-wnm)

## Installation

```
$ npm install --save react-toast-wnm
$ yarn add react-toast-wnm
```

## Demo

[Check demo](https://carl32crc.github.io/react-toast-wnm/?path=/story/button--sample)

## Icons

[ikonate github](https://github.com/mikolajdobrucki/ikonate)
[ikonate icons](https://ikonate.com)

## Toast Hook Params

- `position` options -> `'bottom-right' | 'bottom-center' | 'bottom-left' | 'top-left' | 'top-center' | 'top-right'`.
- `type` options -> `'default' | 'error' | 'warning' | 'success' | 'info'`.

| Params                                 |Description                                                                               |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| autoDismiss `boolean`                  | Default: `true`. Disable or enable dismiss autoclose toast.                              |
| backgroundColor `string`               | Default `''`. Toast backgroundColor                                                      |
| borderRadius `string`                  | Default `6px` . Toast border toast.                                                      |
| children `Object{actions, content}`    | Optional. Toast content and action custom.                                               |   
| color `string`                         | Default `''`. Color text toast.                                                          |    
| delay `number`                         | Default `3000`. The time until a toast will be dismissed automatically, in milliseconds. |
| enableAnimation `bolean`               | Default: `true`.                                                                         |
| height `string`                        | Default `104px`. Toast height.                                                           |
| padding `string`                       | Default `24px 32px`. Toast padding.                                                      |
| position `string`                      | Default `bottom-right`. Viewport place the toasts.                                       |
| subtitle `string`                      | Default `''`. Toast title.                                                               |
| title `string`                         | Default `''`. Toast subtitle.                                                            |
| type `string`                          | Default `default`. Type toast.                                                           |        
| width `string`                         | Default `456px`. Toast width.                                                            |

## Default sample use

```jsx
import { useToast } from 'react-toast-wnm'

const MyComponent = () => {
  const toast = useToast();

  return (
    <Button
      onClick={(): void => {
        toast({
          autoDismiss: true,
          enableAnimation: true,
          delay: 3000,
          type: 'success',
          borderRadius: '6px',
          position: 'bottom-right',
          height: '104px',
          padding: '24px 32px',
          subtitle: 'Default subtitle',
          title: 'Default title',
          width: '456px'
        });
      }}
    >
      Create my custom toast
    </Button>
  );
}

```

## Custom sample use

```jsx
import { useToast } from 'react-toast-wnm'

const CustomContent = () => (
  <div className={myCustomContentStyles}>
    <div>My custom title</div>
    <div>My custom subtitle</div>
  </div>
);

//When you create a custom actions 
// component, a closeToast prop is injected into your component.
const CustomActions = ({ closeToast, color, backgroundColor }) => (
  <div className={myCustomActionsStyles}>
    <button style={{ backgroundColor, color }} onClick={closeToast}>
      Button label
    </button>
    <button style={{ backgroundColor, color }}>Other button</button>
  </div>
)

const MyComponent = () => {
  const toast = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          delay: 5000,
          backgroundColor: '#fff',
          borderRadius: '6px',
          color: '#000',
          position: 'top-right',
          actions: (
            <CustomActions
              color='purple'
              backgroundColor='red'
            />
          ),
          content: <CustomContent />,
     
        });
      }}
    >
      Create my custom toast
    </Button>
  )
}

```