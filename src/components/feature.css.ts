import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text


export const featureSection = style({
    paddingTop: '0px',
    paddingBottom: 0,
    backgroundColor: theme.colors.gold
})

export const featureHeader = style({
    backgroundColor: theme.colors.gold,
    paddingBottom: 0,
})

export const innerBox = style({
    paddingBottom: 0,
})

export const featureImage = style({
    maxHeight: '370px',
})