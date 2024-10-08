import { HTMLAttributes, useState } from "react";
import * as css from './LoadingImage.module.css';
const styles = css as any;

interface LoadingImageProps extends HTMLAttributes<HTMLDivElement> {
    alt: string,
    imgAttributes: React.ImgHTMLAttributes<HTMLImageElement>,
}

function LoadingImage(props: LoadingImageProps) {

    const [loading, setLoading] = useState(true);
    const {imgAttributes, className, ...attr} = props;


    return (
        <div {...attr}
            className={loading ?  styles.loadingImg + (className ? " " + className : "")  : className}
        >
            <img {...imgAttributes} alt={props.alt} onLoad={() => setLoading(false)} />
        </div>
    );
};

export default LoadingImage;