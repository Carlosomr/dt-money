import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    export interface DefaltTheme extends ThemeType{}
}