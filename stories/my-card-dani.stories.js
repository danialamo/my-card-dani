import { html } from 'lit';
import '../src/my-card-dani.js';

export default {
  title: 'MyCardDani',
  component: 'my-card-dani',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <my-card-dani
      style="--my-card-dani-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </my-card-dani>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
