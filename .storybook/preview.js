import '../src/index.css';

const enableBackgroundForMdx = (story, context) => {
  const defaultBackgroundColorKey = context?.parameters?.backgrounds?.default;
  const defaultBackgroundColor = context?.parameters?.backgrounds?.values?.find(
    (v) => v.name === defaultBackgroundColorKey
  )?.value;
  const currentBackgroundColor =
    context?.globals?.backgrounds?.value ?? defaultBackgroundColor;

  const styleContent = `.docs-story {
    background-color: ${currentBackgroundColor}
  }`;

  return (
    <>
      <style>{styleContent}</style>
      <>{story(context)}</>
    </>
  );
};

export const decorators = [enableBackgroundForMdx];

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
