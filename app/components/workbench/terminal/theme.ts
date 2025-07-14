import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--zca-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--zca-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--zca-elements-terminal-textColor'),
    background: cssVar('--zca-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--zca-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--zca-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--zca-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--zca-elements-terminal-color-black'),
    red: cssVar('--zca-elements-terminal-color-red'),
    green: cssVar('--zca-elements-terminal-color-green'),
    yellow: cssVar('--zca-elements-terminal-color-yellow'),
    blue: cssVar('--zca-elements-terminal-color-blue'),
    magenta: cssVar('--zca-elements-terminal-color-magenta'),
    cyan: cssVar('--zca-elements-terminal-color-cyan'),
    white: cssVar('--zca-elements-terminal-color-white'),
    brightBlack: cssVar('--zca-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--zca-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--zca-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--zca-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--zca-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--zca-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--zca-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--zca-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
