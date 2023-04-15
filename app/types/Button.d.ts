import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IButton {
    variation: string;
    icon: any;
    clickAction: any;
    classes: string;
    size: SizeProp;
}

interface ISizeClass {
    sizeIcon : SizeProp
    sizeClass : string
}