
const WALLPAPER_PATH = ".config/ags/images";

const black_hole = {
    wallpaper: `${WALLPAPER_PATH}/black-hole.png`,
    css_theme: "black-hole.scss",
    plasma_color: "ArcMidnightDark.colors",
    // qt_style_theme: "Breeze",
    qt_style_theme: "Breeze",
    // qt_style_theme: "kvantum",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Shades-of-purple",
    gtk_icon_theme: "NeonIcons",
    // rofi_theme: "win20_theme.rasi",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FDBBC4ff) rgba(ff00ffff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 8,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "pinky",
    },
    desktop_widget: "",
}

const win_20 = {
    wallpaper: `${WALLPAPER_PATH}/win20.png`,
    css_theme: "win20.scss",
    plasma_color: "ArcMidnightDark.colors",
    // qt_style_theme: "Breeze",
    qt_style_theme: "Breeze",
    // qt_style_theme: "kvantum",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Shades-of-purple",
    gtk_icon_theme: "NeonIcons",
    // rofi_theme: "win20_theme.rasi",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(EF58BDff) rgba(08fbffff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 8,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "pinky",
    },
    desktop_widget: "Win20Widget",
}

const deer = {
    wallpaper: `${WALLPAPER_PATH}/deer.jpg`,
    css_theme: "deer.scss",
    plasma_color: "BlueDeer.colors",
    qt_style_theme: "Breeze",
    qt_icon_theme: "oomox-aesthetic-dark",
    kvantum_theme: "a-color",
    gtk_theme: "Kimi-dark",
    gtk_icon_theme: "oomox-aesthetic-dark",
    // rofi_theme: "islamic_theme.rasi",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FDB4B7ff) rgba(A2E8FFff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 8,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "Islamic",
    },
    desktop_widget: "",
}

const colors = {
    wallpaper: `${WALLPAPER_PATH}/colors.png`,
    css_theme: "colors.scss",
    plasma_color: "AColors.colors",
    qt_style_theme: "Breeze",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_icon_theme: "NeonIcons",
    // rofi_theme: "colors_theme.rasi",
    gtk_theme: "Shades-of-purple",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FD02FFff) rgba(1ed4fdff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 8,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "pinky",
    },
    desktop_widget: "ColorWidget",
}

const siberian = {
    wallpaper: `${WALLPAPER_PATH}/tapet_Siberian.png`,
    css_theme: "siberian.scss",
    plasma_color: "BlueDeer.colors",
    qt_style_theme: "Breeze",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Shades-of-purple",
    gtk_icon_theme: "NeonIcons",
    // rofi_theme: "islamic_theme.rasi",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FDB4B7ff) rgba(A2E8FFff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 5,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "Islamic",
    },
    desktop_widget: "ColorWidget",
}

const materialYou = {
    wallpaper: `${WALLPAPER_PATH}/pastel.jpg`,
    css_theme: "materialYou.scss",
    plasma_color: "MyMaterialYou.colors",
    qt_style_theme: "Breeze",
    qt_icon_theme: "kora-grey-light-panel",
    kvantum_theme: "a-m-you",
    // gtk_theme: "WhiteSur-Light-solid",
    gtk_theme: "Colorful-Dark-GTK",
    gtk_icon_theme: "kora-grey-light-panel",
    // rofi_theme: "light_material_you_theme.rasi",
    gtk_mode: "light",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(678382ff) rgba(9d6c73ff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 30,
        "drop_shadow": "no",
        "kitty": "materialYou.conf",
        "konsole": "material-you",
    },
    desktop_widget: "MYWidget",
}

const game = {
    wallpaper: `${WALLPAPER_PATH}/game.png`,
    css_theme: "game.scss",
    plasma_color: "ArcStarryDark.colors",
    qt_style_theme: "Lightly",
    qt_icon_theme: "la-capitaine-icon-theme",
    kvantum_theme: "a-color",
    gtk_theme: "Orchis-Green-Dark-Compact",
    gtk_icon_theme: "la-capitaine-icon-theme",
    // rofi_theme: "colors_theme.rasi",
    gtk_mode: "dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(ffff7fff) rgba(ffaa7fff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 8,
        "drop_shadow": "no",
        "kitty": "kitty.conf",
        "konsole": "game",
    },
    desktop_widget: "",
}

export const BLACK_HOLE_THEME = 0;
export const DEER_THEME = 1;
export const COLOR_THEME = 2;
export const SIBERIAN_THEME = 3;
export const MATERIAL_YOU = 4;
export const WIN_20 = 5;
export const GAME_THEME = 6;

const ThemesDictionary = {
    [BLACK_HOLE_THEME]: black_hole,
    [DEER_THEME]: deer,
    [COLOR_THEME]: colors,
    [SIBERIAN_THEME]: siberian,
    [MATERIAL_YOU]: materialYou,
    [WIN_20]: win_20,
    [GAME_THEME]: game,
}

export default ThemesDictionary
