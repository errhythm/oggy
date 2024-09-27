interface TemplateField {
    name: string;
    type: 'text' | 'color' | 'number' | 'select';
    label: string;
    default?: string | number;
    options?: { value: string; label: string }[];
  }

  interface TemplateConfig {
    name: string;
    fields: TemplateField[];
  }

  const templates: Record<string, TemplateConfig> = {
    simple: {
      name: 'Simple',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'backgroundColor', type: 'color', label: 'Background Color', default: '#ffffff' },
        { name: 'textColor', type: 'color', label: 'Text Color', default: '#000000' },
        { name: 'logoUrl', type: 'text', label: 'Logo URL' },
      ],
    },
    gradient: {
      name: 'Gradient',
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'gradientStart', type: 'color', label: 'Gradient Start', default: '#ff0000' },
        { name: 'gradientEnd', type: 'color', label: 'Gradient End', default: '#0000ff' },
        { name: 'textColor', type: 'color', label: 'Text Color', default: '#ffffff' },
      ],
    },
    blog: {
      name: 'Blog',
      fields: [
        { name: 'author', type: 'text', label: 'Author' },
        { name: 'date', type: 'text', label: 'Date' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'imageUrl', type: 'text', label: 'Image URL' },
      ],
    },
  };

  export default templates;
