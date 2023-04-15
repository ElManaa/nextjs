import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IButton {
    variation: string;
    icon: IconProp;
    clickAction: any;
    classes: string | false;
    size: SizeProp;
}

interface ISizeClass {
    sizeIcon : SizeProp
    sizeClass : string
}