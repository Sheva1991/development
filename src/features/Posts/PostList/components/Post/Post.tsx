import React, { useMemo } from 'react'
import { PostProps } from './types';
import Card from "components/Card";
import { CardData } from "components/Card/types";



const Post: React.FC<PostProps> = ({ post }) => {
    const data = useMemo<CardData>(
        () => [
            { key: 1, label: 'Статья id', value: post.id },
            { key: 2, label: 'Написана пользователем с id', value: post.user_id },
            { key: 3, label: 'Название', value: post.title },

        ],
        [post]
    );
    return (
        <Card data={data} link={'/posts/' + post.id} />
    )
}

export default Post

