import { Card } from '~shared/ui/Card';
import { PostHeader } from '../PostHeader/PostHeader';
import { PostContent } from '../PostContent/PostContent';
import { PostFooter } from '../PostFooter/PostFooter';
// import s from './Post.module.scss';

export const Post = () => {
    return (
        <Card>
            <PostHeader />
            <PostContent />
            <PostFooter />
        </Card>
    );
};
