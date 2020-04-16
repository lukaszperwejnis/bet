import {compose, classNames} from "react-compose";
import './Label.scss';

export const Label = compose(classNames('form-field-label'))("label");
