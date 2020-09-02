import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  showPanel: true,
  panel: {
    story: {
      theme: themes.dark
    }
  },
  panelPosition: "bottom",
});