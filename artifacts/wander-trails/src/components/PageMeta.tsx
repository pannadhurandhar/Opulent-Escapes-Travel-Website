import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
};

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const update = (kind: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${kind}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(kind, key);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    update('name', 'description', description);
    update('property', 'og:title', title);
    update('property', 'og:description', description);
    update('property', 'og:type', 'website');
    update('property', 'og:url', window.location.href);
    update('name', 'twitter:title', title);
    update('name', 'twitter:description', description);
  }, [title, description]);

  return null;
}
