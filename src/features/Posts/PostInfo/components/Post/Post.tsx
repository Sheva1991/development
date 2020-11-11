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
            { key: 4, label: 'Создана', value: post.created_at },
            { key: 5, label: 'Обновлена', value: post.updated_at },
            { key: 6, label: 'Содержание', value: post.body },

        ],
        [post]
    );
    return (
        <Card data={data} />
    )
}

export default Post

