const templateContext = require.context('./templates', false, /\.tsx$/);

const templateRegistry = {};

templateContext.keys().forEach((key) => {
    const templateName = key.replace(/^\.\//, '').replace(/\.tsx$/, '');
    templateRegistry[templateName] = templateContext(key).default;
});

export default templateRegistry;
