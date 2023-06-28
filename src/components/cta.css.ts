import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text

export const ctaImage = style({
    // maxHeight: '300px',
    objectFit: 'cover',
    width: '100%',
    display: 'none'
})