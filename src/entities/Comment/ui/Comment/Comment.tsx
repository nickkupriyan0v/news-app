import React from 'react';
import { CommentHeader } from '../CommentHeader/CommentHeader';
import { CommentContent } from '../CommentContent/CommentContent';
import { CommentFooter } from '../CommentFooter/CommentFooter';

export const Comment = () => {
    return (
        <div>
            <CommentHeader />
            <CommentContent />
            <CommentFooter />
        </div>
    );
};
