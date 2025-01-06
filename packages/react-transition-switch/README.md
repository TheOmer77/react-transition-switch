# React Transition Switch

React Transition Switch provides a simple and effective way to easily switch between different components with CSS animations. It's perfect for creating interactive and visually appealing transitions in your React applications.

## Installation

```bash
npm install react-transition-switch
```

## Usage

This package provides a `TransitionSwitch` parent component and a `TransitionSwitchItem` child component.

- The `TransitionSwitch` component accepts a `value` prop, and children which can be `TransitionSwitchItem` components. Components other than `TransitionSwitchItem` are not affected by the `value` prop.
- The `TransitionSwitchItem` component also accepts a `value` prop, and a child which must be a component that accepts a ref, or an element such as a div. If its value matches the parent's value, only this item's children will be rendered.

```jsx
import { useState } from 'react';
import {
  TransitionSwitch,
  TransitionSwitchItem,
} from 'react-transition-switch';

const MyComponent = () => {
  const [value, setValue] = useState('item1');

  return (
    <TransitionSwitch value={value}>
      <TransitionSwitchItem value='item1'>
        <div>Item 1</div>
      </TransitionSwitchItem>
      <TransitionSwitchItem value='item2'>
        <div>Item 2</div>
      </TransitionSwitchItem>
      {/* Add more TransitionSwitchItems as needed */}
    </TransitionSwitch>
  );
};
```

### Adding Transitions

To add transitions between items, you can use CSS animations. Simply add a CSS class to your parent `TransitionSwitch` component:

```jsx
<TransitionSwitch value={value} className='fade'>
  <TransitionSwitchItem value='item1'>
    <div>Item 1</div>
  </TransitionSwitchItem>
</TransitionSwitch>
```

In your CSS file, define your animations for active/incoming and inactive/outgoing items, and add them to the correct children by their `data-state` attribute.

<details>
  <summary>CSS example</summary>

```css
.fade {
  position: relative;
}
.fade > * {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
}

.fade > [data-state='active'] {
  animation: fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.fade > [data-state='inactive'] {
  animation: fadeOut 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

</details>

### Optional `TransitionSwitch` props

| Prop               | Type      | Description                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `asChild`          | `boolean` | Change the default `<div>` element for the one passed as a child, merging their props and behavior.<br>When set to true, this component must have a single child which accepts a ref, and its children should be `<TransitionSwitchItem>` components.<br>See [Radix UI composition](https://www.radix-ui.com/primitives/docs/guides/composition) |
| `autoAdjustHeight` | `boolean` | Whether or not the parent container should automatically adjust its height to that of the active child.                                                                                                                                                                                                                                          |
| `autoAdjustWidth`  | `boolean` | Whether or not the parent container should automatically adjust its width to that of the active child.                                                                                                                                                                                                                                           |
| `directional`      | `boolean` | Add a `data-direction` attribute to the parent element, representing the transition direction, which would have a value of either 'backward' or 'forward'. This allows to apply a different animation based on the transition direction.                                                                                                         |
