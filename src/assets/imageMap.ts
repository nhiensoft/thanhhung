const rawAssets = import.meta.glob('./*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const byFileName: Record<string, string> = {};

for (const [key, value] of Object.entries(rawAssets)) {
  const fileName = key.replace('./', '');
  byFileName[fileName] = value;
}

const normalize = (input: string) =>
  input
    .replace(/^@\/assets\//, '')
    .replace(/^\/?src\/assets\//, '')
    .replace(/^\/?assets\//, '');

export const assetUrl = (input: string): string => {
  const fileName = normalize(input);
  const url = byFileName[fileName];

  if (!url) {
    console.warn(`[assetUrl] Missing asset: ${input}`);
    return '';
  }

  return url;
};

export const ASSET_MAP = byFileName;
