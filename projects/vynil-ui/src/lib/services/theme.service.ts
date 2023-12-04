import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Theme {
    variables: {
        border: number,
        radius: number;
        padding: number;
        transitionLength: number;
        colorContrastFactor: number,
        iconSizes: number[];
        fontSizes: number[];
    };
    colors: {
        text: string;
        primary: string;
        highlight: string;
        background: string;
        boxShadow: string;
    };
}

const UNIT_REM = 'rem';
const UNIT_PIXEL = 'px';
const UNIT_SECONDS = 's';
const UNIT_PERCENTAGE = '%';
const ICON_SIZE_NAMES = ['s', 'button', 'm', 'l', 'xl'];
const FONT_SIZE_NAMES = ['xs', 's', 'm', 'l', 'xl', 'h3', 'h2', 'h1'];
const DEFAULT_THEME: Theme = {
    variables: {
        border: 2,
        radius: 1,
        padding: 1,
        transitionLength: 0.5,
        colorContrastFactor: 10,
        iconSizes: [0.75, 0.9, 1.5, 2.75, 5],
        fontSizes: [10, 12, 16, 20, 24, 42, 64, 92],
    },
    colors: {
        text: '#FFFFFF',
        primary: '#0EA5E9',
        highlight: '#FFFFFF',
        background: '#27272A',
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
}

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public theme: BehaviorSubject<Theme>;

    public constructor() {
        this.theme = new BehaviorSubject<Theme>(DEFAULT_THEME);
        this.updateTheme(DEFAULT_THEME);
    }

    public updateTheme(themeChanges: Partial<Theme>): void {
        const root = document.querySelector(':root') as HTMLElement;
        if (root) {
            this.updateElementTheme(root, themeChanges);
        }
        this.theme.next({
            variables: {
                ...this.theme.value.variables,
                ...themeChanges.variables,
            },
            colors: {
                ...this.theme.value.colors,
                ...themeChanges.colors,
            }
        });
    }

    public updateElementTheme(element: HTMLElement, themeChanges: Partial<Theme>): void {
        if (element) {
            if (themeChanges.variables) {
                if (themeChanges.variables.border) {
                    this.updateVariable(element, 'border', themeChanges.variables.border, UNIT_PIXEL);
                }
                if (themeChanges.variables.radius) {
                    this.updateVariable(element, 'radius', themeChanges.variables.radius, UNIT_REM);
                }
                if (themeChanges.variables.padding) {
                    this.updateVariable(element, 'padding', themeChanges.variables.padding, UNIT_REM);
                }
                if (themeChanges.variables.transitionLength) {
                    this.updateVariable(element, 'transition-length', themeChanges.variables.padding, UNIT_SECONDS, true);
                }
                if (themeChanges.variables.iconSizes) {
                    this.updateIconSizes(element, themeChanges.variables.iconSizes);
                }
                if (themeChanges.variables.fontSizes) {
                    this.updateFontSizes(element, themeChanges.variables.fontSizes);
                }
            }
            if (themeChanges.colors) {
                const themeColors = themeChanges.colors as { [key: string]: string };
                Object.keys(themeColors)
                .forEach((key: string) => {
                    if (key !== 'boxShadow') {
                        this.updateColor(element, key, themeColors[key]);
                    }
                });
                if (themeChanges.colors.boxShadow) {
                    this.updateColor(element, 'box-shadow', themeChanges.colors.boxShadow, true);
                }
            }
        }
    }

    private updateVariable(element: HTMLElement, propertyName: string, value: number, unit: string, skipAlts?: boolean): void {
        element.style.setProperty('--vui-variable-' + propertyName, value + unit);
        if (!skipAlts) {
            element.style.setProperty('--vui-variable-' + propertyName + '-xs', (value / 4) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-extra-small', (value / 4) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-s', (value / 2) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-small', (value / 2) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-l', (value * 2) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-large', (value * 2) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-xl', (value * 4) + unit);
            element.style.setProperty('--vui-variable-' + propertyName + '-extra-large', (value * 4) + unit);
        }
    }

    private updateColor(element: HTMLElement, propertyName: string, value: string, skipAlts?: boolean): void {
        element.style.setProperty('--vui-color-' + propertyName, value);
        if (!skipAlts) {
            element.style.setProperty('--vui-color-' + propertyName + '-darker', 'color-mix(in srgb,' + value + ',#000 ' + this.theme.value.variables.colorContrastFactor + UNIT_PERCENTAGE);
            element.style.setProperty('--vui-color-' + propertyName + '-lighter', 'color-mix(in srgb,' + value + ',#FFF ' + this.theme.value.variables.colorContrastFactor + UNIT_PERCENTAGE);
        }
    }

    private updateIconSizes(element: HTMLElement, values: number[]): void {
        values.forEach((value: number, index: number) =>
            this.updateVariable(element, 'icon-size-' + ICON_SIZE_NAMES[index], value, UNIT_REM, true));
    }

    private updateFontSizes(element: HTMLElement, values: number[]): void {
        values.forEach((value: number, index: number) =>
            this.updateVariable(element, 'font-size-' + FONT_SIZE_NAMES[index], value, UNIT_PIXEL, true));
    }
}
