import { EditorTitle } from '../EditorTitle/EditorTitle';
import s from './Editor.module.scss';
export const Editor = () => {
    return (
        <div className={s.editor}>
            <EditorTitle />
            <p>editor</p>
        </div>
    );
};
