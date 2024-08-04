import AnnounceBar from '../components/AnnounceBar';

const story = {
  title: 'AnnounceBar',
  component: AnnounceBar,
};

export default story;

const TemplateStory = (args) => <AnnounceBar {...args} />;

const WithTypeSuccess = TemplateStory.bind({});
WithTypeSuccess.args = {
  title: 'Success',
  content: 'This is a success message',
  ctaLabel: 'Click me',
  type: 'success',
};

const WithTypeError = TemplateStory.bind({});
WithTypeError.args = {
  title: 'Error',
  content: 'This is an error message',
  ctaLabel: 'Click me',
  type: 'error',
};

const WithTypeWarning = TemplateStory.bind({});
WithTypeWarning.args = {
  title: 'Warning',
  content: 'This is a warning message',
  ctaLabel: 'Click me',
  type: 'warning',
};

const WithTypeInfo = TemplateStory.bind({});
WithTypeInfo.args = {
  title: 'Info',
  content: 'This is an info message',
  ctaLabel: 'Click me',
  type: 'info',
};

export { WithTypeSuccess, WithTypeError, WithTypeWarning, WithTypeInfo };
