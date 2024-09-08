export const androidRipple = {
  color: 'rgb(0, 0, 0, 1)',
  borderless: false,
  radius: 500
};

export function rgbaToHex(rgba: string): string {
  const [r, g, b, a] = rgba.match(/\d+.?\d*/g) ?? [0, 0, 0, 1];
  const alpha = Math.round((a as number) * 255)
    .toString(16)
    .padStart(2, '0');
  const red = parseInt(r as string)
    .toString(16)
    .padStart(2, '0');
  const green = parseInt(g as string)
    .toString(16)
    .padStart(2, '0');
  const blue = parseInt(b as string)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}${alpha}`;
}

export function kebabToTitleCase(kebab: string): string {
  return kebab
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function pascalToTitleCase(pascal: string): string {
  return pascal
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
