# React Transition Switch

React Transition Switch provides a simple and effective way to easily switch between different components with CSS animations. It's perfect for creating interactive and visually appealing transitions in your React applications.

## Installation

This package can be installed from the GitHub NPM registry. Create a `.npmrc` file in your project and add the following to it:

```
@theomer77:registry=https://npm.pkg.github.com
```

Then install using your favorite package manager:

```bash
npm install @theomer77/react-transition-switch
```

## Usage

This package provides a `TransitionSwitch` parent component and `TransitionSwitchItem` child component.

- The `TransitionSwitch` component accepts a `value` prop, and children which must be `TransitionSwitchItem` components.
- The `TransitionSwitchItem` component also accepts a `value` prop, and a child which must be a component that accepts a ref, or an element such as a div.

If the value of an item matches the parent's value, only that item's child component will be displayed. The parent container will also adjust its width & height to those of the active item.

```jsx
import { useState } from 'react';
import {
  TransitionSwitch,
  TransitionSwitchItem,
} from '@theomer77/react-transition-switch';

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

To add transitions between items, you can use CSS animations. Add a CSS class to your parent `TransitionSwitch` component:

```jsx
<TransitionSwitch value={value} className='my-animation'>
  <TransitionSwitchItem value='item1'>
    <div>Item 1</div>
  </TransitionSwitchItem>
</TransitionSwitch>
```

In your CSS file, define your animations for active/incoming and inactive/outgoing items, and add them to the correct children by their `data-state` attribute:

```css
.my-animation > [data-state='active'] {
  animation: fadeIn 300ms ease-in-out;
}

.my-animation > [data-state='inactive'] {
  animation: fadeOut 300ms ease-in-out;
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

### The `directional` prop

Setting the `directional` prop on your parent `TransitionSwitch` allows you to apply a different animation based on the transition direction - whether the incoming child comes before or after the outgoing child. This will add a `data-direction` attribute to the parent, which you can target in your CSS.

<!-- TODO: Directional CSS example -->
